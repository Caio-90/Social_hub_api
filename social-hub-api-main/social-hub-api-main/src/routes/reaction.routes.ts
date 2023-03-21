import express from "express"
import Model from "../models/Reaction.model"
import ReactionController from "../controllers/Reaction.controller"

const reactionController = new ReactionController()

/**
 * Reação
 * @tags reações
 * @typedef {object} Reaction
 * @property {string}  reaction - O tipo da reação
*/
const route = express.Router()

/**
 * GET /reaction/
 * @summary Lista todas as reações cadastradas no sistema
 * @security BearerAuth
 * @tags reações
 * @return {array<Reaction>} 200 - success response
 * @return {object} 400 - Bad request response
*/
route.get("/", (req, res) => {
	return reactionController.list(req, res);
})

/**
 * GET /reaction/{reactionId}
 * @property {number} reactionId - ID da reação
 * @summary Mostra a reação buscada feita numa postagem.
 * @security BearerAuth
 * @tags reações
 * @param {number} reactionId.path.required - Id da postagem referente a reação.
 * @return {Reaction} 200 - Sucess response.
 * @return {object} 400 - Bad request response.
*/
route.get("/:reactionId", (req, res) => {
	return reactionController.show(req, res);
})

/**
 * POST /reaction/{postId}
 * @tags reações
 * @summary Faz uma nova reação
 * @security BearerAuth
 * @param {number} postId.path.required - Id da postagem referente a nova reação.
 * @param {Reaction} request.body.required - Reação a ser inserida.
 * @return {Reaction} 200 - Sucess response.
 * @return {object} 400 - Bad request response.
*/
route.post("/:postId", (req, res) => {
	return reactionController.create(req, res);
})

/**
 * PUT /reaction/{reactionId}
 * @tags reações
 * @summary Busca uma reação e atualiza seu registro.
 * @security BearerAuth
 * @param {number} postId.path.required - ID da postagem.
 * @param {number} reactionId.path.required - ID da reação a ser alterada.
 * @param {Reaction} request.body.required - informações da reação a ser alterada
 * @return {Reaction} 200 - Sucess response.
 * @return {object} 400 - Bad request response.
*/
route.put("/:reactionId", (req, res) => {
	return reactionController.update(req, res);
})

/**
 * DELETE /reaction/{reactionId}
 * @tags reações
 * @summary Apaga a reação com o ID fornecido
 * @security BearerAuth
 * @param {number} reactionId.path.required - ID da reação a ser buscada
 * @return {Reaction} 200 - Sucess response.
 * @return {object} 400 - Bad request response.
*/
route.delete("/:reactionId", (req, res) => {
	return reactionController.delete(req, res);
})

export default route
