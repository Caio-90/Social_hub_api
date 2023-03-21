import { Request, Response} from "express"
import Reaction from "../models/Reaction.model"
import createReaction from "../services/reactionServices/createReaction"
import deleteReaction from "../services/reactionServices/deleteReaction"
import updateReaction from "../services/reactionServices/updateReaction"
import findReactionById from "../services/reactionServices/findReactionById"
import findAllReactions from "../services/reactionServices/findAllReactions"
import findPostById from "../services/postServices/findPostById"
import findCommentById from "../services/commentServices/findCommentById"

export default class ReactionController {
	public async list(request: Request, response: Response): Promise<Response> {
		const reactions = await findAllReactions();
		if (reactions) { return response.status(200).send(reactions); }
		return response.send(reactions);
	}

	public async show(request: Request, response: Response): Promise<Response> {
		const reactionId = parseInt(request.params.reactionId);
		if (isNaN(reactionId)) {
			return response.status(400).send({
				message: 
					"O parâmetro id tem formato inválido. Este parâmetro precisa ser um número."
			});
		}

		const reaction = await findReactionById(reactionId);
		if (reaction) { 
			return response.status(200).send(reaction)
		}

		return response.status(400).send({
			message: "A ID da reação requsitada não se encontra no bando de dados."
		})
	}

	public async create(request: Request, response: Response): Promise<Response> {
		const postId = parseInt(request.params.postId);
		if (isNaN(postId)) {
			return response.status(400).send({
				message: "O parâmetro id deve ser um número."
			})
		}

		const post = await findPostById(postId);
        if (post === null) {
            return response.send({ message: "Postagem não consta no banco de dados." });
        }
		
		const reactionParams = { reaction: request.body.reaction }
		const reaction = await createReaction(reactionParams);
		return response.status(200).send(reaction);
	}

	public async update(request: Request, response: Response): Promise<Response> {
		const reactionId = parseInt(request.params.reactionId);
		if (isNaN(reactionId)) {
			return response.status(400).send({
				message: 
					"O parâmetro id tem formato inválido. Este parâmetro precisa ser um número."
			})
		}

		const reaction = await updateReaction(reactionId, request.body.reaction);

		if (reaction) { 
			return response.status(200).send(reaction);
		}

		return response.send({
			message: "A ID da reação requsitada não se encontra no bando de dados."
		})
	}

	public async delete(request: Request, response: Response){
		const reactionId = parseInt(request.params.reactionId);
		if (isNaN(reactionId)) {
			return response.status(400).send({
				message: 
					"O parâmetro id tem formato inválido. Este parâmetro precisa ser um número."
			})
		}

		const reaction = await deleteReaction(reactionId);
		if (reaction) { 
			return response.status(200).send(reaction); 
		}
		return response.send({ message: "Essa reação não consta no banco de dados." });
	}

	public async showByPost(request: Request, response: Response): Promise<Response> {
		const postId = parseInt(request.params.postId);
		if (isNaN(postId)) {
			const message = {
				message: 
					"O parâmetro id tem formato inválido. Este parâmetro precisa ser um número."
			};
			return response.send(message);
		}

		const post = await findPostById(postId);
        if (post === null) {
            return response.send({ message: "Postagem não consta no banco de dados." });
        }

		const reactions = post.reactionId;

		if (reactions) { return response.send(reactions) }

		const message = { message: "Não existe no banco de dados." }
		return response.send(message);
	}

	public async showByComment(request: Request, response: Response): Promise<Response> {
		const commentId = parseInt(request.params.commentId);
		if (isNaN(commentId)) {
			const message = {
				message: 
					"O parâmetro id tem formato inválido. Este parâmetro precisa ser um número."
			};
			return response.send(message);
		}

		const comment = await findCommentById(commentId);
        if (comment === null) {
            return response.send({ message: "Postagem não consta no banco de dados." });
        }

		const reactions = comment.reactionId;


		if (reactions) { return response.send(reactions) }

		const message = { message: "Não existe no banco de dados." }
		return response.send(message);
	}
}
