const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./Views/index.html"))
});
app.get('/turing', (req, res) => {
    res.sendFile(path.join(__dirname, "./Views/turing.html"))
});
app.get('/lovelance', (req, res) => {
    res.sendFile(path.join(__dirname, "./Views/lovelance.html"))
});
app.get('/hopper', (req, res) => {
    res.sendFile(path.join(__dirname, "./Views/hopper.html"))
});
app.get('/hamilton', (req, res) => {
    res.sendFile(path.join(__dirname, "./Views/hamilton.html"))
});
app.get('/clarke', (req, res) => {
    res.sendFile(path.join(__dirname, "./Views/clarke.html"))
});
app.get('/berners-lee', (req, res) => {
    res.sendFile(path.join(__dirname, "./Views/berners-lee.html"))
});
app.get('/babbage', (req, res) => {
    res.sendFile(path.join(__dirname, "./Views/babbage.html"))
});

app.listen(3030, () => {console.log("Servidor creado en el puerto 3030")});

