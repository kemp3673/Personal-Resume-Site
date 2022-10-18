const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const compression = require('compression');
const path = require("path");
const app = express();

// Middleware
app.use(cors())
app.use(compression())

let PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../public")));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public'));
});
console.log(`Server listening at http://localhost:${PORT}`);

app.listen(3000);