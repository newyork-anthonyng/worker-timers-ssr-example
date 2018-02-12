import express from "express";
const router = express.Router();

import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";

router.get("*", (req, res) => {
  const html = ReactDOMServer.renderToString(<App />);
  
  res.send(`
    <!doctype html>
    <html>
      <body>
        <div id="app">${html}</div>
        <script type="text/javascript" src="bundle.js"></script>
      </body>
    </html>
  `);
});

export default router;
