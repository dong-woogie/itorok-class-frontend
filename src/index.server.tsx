import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { ChunkExtractor } from "@loadable/server";
import path from "path";
import serveStatic from "serve-static";
import App from "./App";
import { createApolloClient } from "./apollo";
import { ApolloProvider } from "@apollo/client";
import { getDataFromTree } from "@apollo/client/react/ssr";

const app = express();
const PORT = 5001;

const statsFile = path.join(__dirname, "../build/loadable-stats.json");

app.use(serveStatic(path.resolve("./build"), { index: false }));

app.get("*", async (req, res) => {
  const context = {};
  const extractor = new ChunkExtractor({ statsFile, publicPath: "/" });

  const client = createApolloClient();

  const jsx = extractor.collectChunks(
    <ApolloProvider client={client}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </ApolloProvider>
  );

  try {
    await getDataFromTree(jsx);
  } catch (e) {}

  const rendered = renderToString(jsx);

  const initialState = client.extract();

  const apolloScript = `<script>window.__APOLLO_STATE__ = ${JSON.stringify(
    initialState
  ).replace(/</g, "\\u003c")}</script>`;

  const scriptCollected = extractor.getScriptTags() + apolloScript;
  const linkCollected = extractor.getLinkTags();
  const styleCollected = extractor.getStyleTags();

  res.set("content-type", "text/html");
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        ${linkCollected}
        ${styleCollected}
      </head>
      <body>
        <div id="root">${rendered}</div>
      </body>
      ${scriptCollected}
    </html>
  `);
});

app.listen(PORT, () => console.log(`start server >> http://localhost:${PORT}`));
