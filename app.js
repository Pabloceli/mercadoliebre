const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "./public")));

app.listen(3030, () => {console.log("Servidor corriendo http://localhost:3030");});
app.get("/", (req, res) => {res.sendFile(path.join(__dirname, "/views/home.html"));});
app.get("/home", (req, res) => {res.sendFile(path.join(__dirname, "/views/home.html"));});
app.get("/login", (req, res) => {res.sendFile(path.join(__dirname, "/views/login.html"));});
app.get("/register", (req, res) => {res.sendFile(path.join(__dirname, "/views/register.html"));});