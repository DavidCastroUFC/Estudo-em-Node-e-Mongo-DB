const express = require('express');
// definindo o express pra usar a funcão router
const routes = express.Router();
const userController = require('./controller/userController');
const postController = require('./controller/postController');
const authController = require('./controller/authController');
// usando as rodas para realizar ações
routes.get("/users", userController.listar);
routes.post("/users", userController.criar);
routes.get("/users/:id", userController.pesquisar);
routes.put("/users/:id", userController.atualizar);
routes.delete("/users/:id", userController.deletar);
routes.get("/users/:id/post", postController.pesquisarporusuario);
routes.get("/post/:id", postController.mostrarpost);
routes.put("/post/:id", postController.atualizar);
routes.put("/post/:id", postController.deletar);
routes.get("/post", postController.listar);
routes.post("/post", postController.criar);
routes.post("/users/sign", authController.logar);

module.exports = routes;