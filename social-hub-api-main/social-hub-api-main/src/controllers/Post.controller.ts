import {Request, Response } from "express"
import createPost from "../services/postServices/createPost"
import findPostById from "../services/postServices/findPostById"
import findPosts from "../services/postServices/findPosts"


export default class PostController {
    /**
     * mostra todos os posts 
     * @param request  requisição do protocolo http
     * @param response  resposta do protocolo http
     * @return {Promise<Response>} retorna uma promessa de resposta ao usuário
     */
    public async list(request: Request, response: Response): Promise<Response> {
        const posts = await findPosts()

        if(posts) {
            return response.send(posts)
        }

        return response.send({message: "Não há posts"})

        
    }

    public async show(request: Request, response: Response): Promise<Response> {
        const postId = parseInt(request.params.id)

        if(isNaN(postId)) {
            return response.status(400).send({
                message: "O Id do post requisitado não existe"
            })
        }
        const posts = await findPostById(postId)

        return response.send({message: "Não foi possível localizar este post no banco de dados"})

    }

    public async create(request: Request, response: Response): Promise<Response> {
        const postParams = {
            title: request.body.title,
            content: request.body.content
        }

       
        if (postParams.content == "") {
            return response.send({message: "O campo conteúdo não pode estar vazio"})
        }

        const post = await createPost({content: postParams.content, title: postParams.title})

        return response.send(post)
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        const postId = parseInt(request.params.postId)

        if (isNaN(postId)) {
            return response.send({
                message: "Formato inválido"
            })
        }

        const post = await findPostById(postId)

        if (post) {
            post.visible = false

            post.save()

            return response.send(post)
        }
        return response.send({message: "O contrário não pôde ser apagado"})
    }
}