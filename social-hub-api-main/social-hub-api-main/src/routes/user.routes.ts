import express from "express"
import Model from "../models/User.model"
import UserController from "../controllers/User.controller"

const userController = new UserController();
/**
 * Um usuário
 * @tags users
 * @typedef {object} User
 * @property {string} id.required - O id
 * @property {string} firstName - Primeiro nome
 * @property {string} lastName - Sobrenome
 * @property {string} phone - Telefone
 * @property {Date} birthDate - senha
 * @property {string} email - email
 * @property {string} password - senha
 */
const route = express.Router()

/**
 * GET /users
 * @summary Lista todos os usuários cadastrados no sistema!!!!!
 * @security BearerAuth
 * @tags users
 * @return {array<User>} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 */
route.get("/", (req, res) => {
  return userController.list(req, res);
})


/**
 * GET /users/:{id}
 * @summary Retorna os atributos do usuário correspondente
 * @security BearerAuth
 * @tags users
 * @return {object} 400 - Bad request response
 * @return {array<User>} 200 - success response - application/json
 * @param {number} id.path.required - id do usuário buscado
 */
route.get("/:id", (req, res) => {
  return userController.show(req, res);
})


/**
 * POST /users
 * @tags users
 * @summary cria um novo usuário 
 * @security BearerAuth
 * @param {User} request.body.required - informações do usuário a ser inserido
 * @return {object} 200 - response
 */
route.post("/", (req, res) => {
  //essa rota adiciona um usuário no banco de dados
  return userController.create(req, res);
})

/**
 * PUT /user/:id
 * @tags users
 * @summary busca o usuário correspondente ao id e atualiza o registro
 * @security BearerAuth
 * @param {number} id.query.required - id do usuário a ser buscado
 * @param {User} request.body.required - informações do usuário para serem alteradas
 * @return {object} 200 - response
 */
route.put("/:id", (req, res) => { //encontrar o usuário, alterar os dados e salvar

  return userController.update(req, res);
})

/**
 * DELETE /user/:id
 * @tags users
 * @summary busca o usuário correspondente ao id e apaga o registro
 * @security BearerAuth
 * @param {number} id.query.required - id do usuário a ser buscado
 * @return {object} 200 - response
 */
route.delete("/:id", (req, res) => {
})
export default route