const express = require("express");
const mongoose  = require("mongoose");
const cors = require("cors");
// usando o 'yarn add require-dir' ele instala uma biblioteca
// que faz o require em todos os models da pasta Models, automaticamente
const requireDir = require('require-dir');

// iniciando o app
const app = express();
app.use(cors());
// utilizado para permitir o envio e recemimento de dados no formato JSON
app.use(express.json());

// iniciando o DB e conectando com DB externo
mongoose.connect("mongodb+srv://dvd_castro:40028922@linkedin.6vdkf.gcp.mongodb.net/Linkedin?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});

//aqui abaixo é da conexão com o BD é quando eu uso o require-dir para pegar todos os models da pasta.
requireDir('./src/models/');
// criando o arquivo routes.js para poder separar as rotas do arquivo do servidor
// as rotas agora vão vir do arquivo Routes.js
app.use("/", require("./src/Routes"));

app.listen(3333);
module.exports = app;