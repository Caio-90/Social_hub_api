import { Request, Response } from "express"
import findCommentById from "../services/commentServices/findCommentById"
import createReply from "../services/replyServices/createReply"
import findRepliesByCommentsId from "../services/replyServices/findRepliesByCommentsId"

export default class ReplyController {

  /**
   * Acha todas as resposta de um determiando comentário
   * @param {Request} request - request do protocolo HTTP
   * @param {Response} response - response do proocolo HTTP
   * @returns {Promise<Response>} Retorna uma promise com a resposta ao usuário
   */
  public async list(request: Request, response: Response): Promise<Response> {
    const repliedCommentId = parseInt(request.params.commentId)

    if(isNaN(repliedCommentId)) {
      return response.status(400).send({message: "O formato de ID fornecido é inválido"})
    }

    const commentRepliedExists = await findCommentById(repliedCommentId)

    if (!commentRepliedExists) {
      return response.status(400).send({ message: "Não foi possível encontrar os comantários que você estava procurando"})
    }

    const replies = await findRepliesByCommentsId(repliedCommentId)

    if (replies) { 
      return response.json(replies)
    }

    return response.status(400).send({ message: "Ocorreu um erro ao buscar as respostas desse comentário"})
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const commentId = Number(request.params.commentId)
    const replyParams = {
      content: request.body.content
    }

    if(isNaN(commentId)) return response.send({message: "O ID do post foi escrito de forma incorreta"})
    if(replyParams.content == "") return response.send({message: "O Conteúdo da resposta não pode estar vazio"})

    const reply = await createReply({content: replyParams.content, repliedCommentId: commentId})

    return response.status(200).send(reply)
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const replyId = Number(request.params.replyId)

    if(isNaN(replyId)) return response.send({message: "Formato de ID inválido"})

    let comment = await findCommentById(replyId)

    if(comment) {
      comment.visible = false
      comment.save()
      return response.send(comment)
    }

    return response.send({message: "Houve um problema ao apagar o coemntário"})
  }
}