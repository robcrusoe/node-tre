/* Core Module Imports */
const path = require("path");

/* 3rd Party Imports */
const express = require("express");
const favicon = require("serve-favicon");

const app = express();

/* Setting up the application favicon ... */
app.use(favicon(path.join(__dirname, 'public', 'assets', 'favicon.ico')));

/* Setting up global configurations ... */
app.set("view engine", "pug");
app.set("views", "views");

app.use((req, res, next) => {
    res.status(404).render("404");
});

app.listen(3001);
console.log('Server running on PORT: 3001');