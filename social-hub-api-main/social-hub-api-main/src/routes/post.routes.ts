import express from "express";
import PostController from "../controllers/Post.controller"

const postController = new PostController()

/**
 * Publicação
 * @tags post
 * @typedef {object} Post
 * @property {number} id
 * @property {string} title
 * @property {string} content
 */
const route = express.Router()

/**
 * GET /post
 * @summary Mostra a lista de posts no sistema
 * @security BearerAuth
 * @tags post
 * @return {array<Post>} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 */
route.get("/", (req, res) => {
    return postController.list(req, res)
})

/**
 * GET /post/{postId}
 * @summary Busca um post
 * @security BearerAuth
 * @tags post
 * @return {Post} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 * @param {number} postId.path.required
 */
route.get("/:postId/", (req, res) => {
    return postController.show(req, res)
})

/**
 * POST /post
 * @tags post
 * @summary cria um novo post
 * @security BearerAuth
 * @param {Post} request.body - informações necessárias para criar um post
 * @return {object} 200 - response
 */
route.post("/", (req, res) => {
    return postController.create(req, res)
})

/**
 * DELETE /post/{postId}
 * @tags post
 * @summary deixa o post invisível para o usuário
 * @param {number} postId.path.required - Id do post a ser removido
 * @return {object} 200 - response
 */
route.delete("/:postId/", (req, res) => {
    return postController.delete(req, res)
})

export default route