import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { ChunkExtractor } from "@loadable/server";
import path from "path";
import serveStatic from "serve-static";
import App from "./App";

const app = express();
const PORT = 5001;

const statsFile = path.join(__dirname, "../build/loadable-stats.json");

app.use(serveStatic(path.resolve("./build"), { index: false }));

app.get("*", (req, res) => {
  const context = {};
  const extractor = new ChunkExtractor({ statsFile, publicPath: "/" });
  const jsx = extractor.collectChunks(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const rendered = renderToString(jsx);

  const scriptCollected = extractor.getScriptTags();
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
