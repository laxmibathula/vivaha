require("dotenv").config();
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes.js");
const app = express();
const fs = require("fs");

app.use(express.static(`${__dirname}/public`));
app.use(cors());

if (process.env.NODE_ENV !== "production") {
   const config = require("./webpack.dev.config.js");
   fs.unlink(`${__dirname}/public/${config.output.filename}`, (err) => {
      console.log(err);
   });
   fs.unlink(`${__dirname}/public/${config.output.filename}.map`, () => {});

   const webpack = require("webpack");
   const webpackDevMiddleware = require("webpack-dev-middleware");
   const webpackHotMiddleware = require("webpack-hot-middleware");

   const compiler = webpack(config);
   app.use(webpackHotMiddleware(compiler));
   app.use(
      webpackDevMiddleware(compiler, {
         publicPath: config.output.publicPath,
      })
   );
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", routes);

app.set("port", process.env.PORT);
const server = app.listen(app.get("port"), () => {
   console.log(`React app is up and running on port: ${app.get("port")}`);
});
