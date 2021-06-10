import { ChunkExtractor } from "@loadable/server";
import { HelmetData } from "react-helmet-async";

interface HtmlProps {
  extractor: ChunkExtractor;
  content: string;
  apolloState: any;
  reduxState: any;
  helmet: HelmetData;
}

export const htmlTemplate = ({
  extractor,
  content,
  reduxState,
  apolloState,
  helmet,
}: HtmlProps) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
    ${helmet.title.toString()}
    ${extractor.getLinkTags()}
    ${extractor.getStyleTags()}
  </head>
  <body>
    <div id="root">${content}</div>
  </body>
  <script>window.__APOLLO_STATE__ = ${JSON.stringify(apolloState).replace(
    /</g,
    "\\u003c"
  )}</script>
  <script>window.__REDUX_STATE__ = ${JSON.stringify(reduxState).replace(
    /</g,
    "\\u003c"
  )}</script>
  ${extractor.getScriptTags()}
</html>
`;
