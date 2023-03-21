import { Router } from "express" 
import ReplyController from "../controllers/Reply.controller"
import CommentsController from "../controllers/Comments.controller"

const replyController = new ReplyController()
const commentsController = new CommentsController()

/**
 * Respostas
 * @tags respostas
 * @typedef {object} Reply
 * @property {number} repliedCommentId
 * @property {string} content
 */
const route = Router()

/**
 * GET /replies/{commentId}
 * @summary Busca um comentário e suas respostas
 * @secutiry BearerAuth
 * @tags respostas
 * @return {Comment} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 * @param {number} commentId.path.required
 */
 route.get("/:commentId", (req, res) => {
  return commentsController.show(req, res)
})

/**
 * POST /replies/{commentId}
 * @summary Cria uma resposta para um comentário
 * @security BearerAuth 
 * @tags respostas
 * @return {object<Reply>} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 * @param {number} commentId.path.required - Id do comentário que vai receber a resposta
 * @param {Reply} request.body - dados para criação da resposta
 */
route.post("/:commentId", (req, res) => replyController.create(req, res))

/**
 * DELETE /replies/{replyId}
 * @summary Apaga a resposta
 * @security BearerAuth
 * @tags respostas
 * @return {array<Reply>} 200 - success response - application/json
 * @return {object} 400 - Bad request response 
 * @param {number} replyId.path.required
 */
route.delete("/:replyId", (req, res) => replyController.delete(req, res))

export default route 