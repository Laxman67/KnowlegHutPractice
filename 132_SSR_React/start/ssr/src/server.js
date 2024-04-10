import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import axios from "axios";
import App from "./app/App";
const apiSever = process.env.API_SERVER || `https://localhost:8080/todos`;
const port = process.env.PORT || 3000;

const app = express();
app.use(express.static("build/js"));
app.use(express.static("build/css"));

const html_template = (app) => `

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="stylesheet" href="./style.css">
   
  <title>SSR React</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">${app}</div>
   <script src="./bundle.js"></script>
  </body>
</html>

`;
app.get("/", (req, res) => {
  // Render react app & server
  const str = renderToString(<App />);
  res.send(html_template(str));
});

app.listen(port, () => console.log(`SSR Server running on port :${port}`));
