import { Request, Response } from "express"
import User from "../models/User.model"
import createUser from "../services/userServices/createUser"
import findUserById from "../services/userServices/findUserById"


export default class UserController {

    public async list(request: Request, response: Response): Promise<Response> {
        const users = await User.find({});

        return response.send(users);
    }

    public async show(request: Request, response: Response): Promise<Response> {
        const userId = parseInt(request.params.id);

        if (isNaN(userId)) {
            return response.send({
                message:
                    "O parâmetro ID tem formato inválido. Este parâmetro precisa ser um número.",
            });
        }

        const user = await findUserById(userId);

        if (user) {
            return response.send(user);
        }

        return response.send({ message: "Nao existe no banco de dados" });
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const userParams = {
            firstName: request.body.firstName,
            lastName: request.body.lastName,
            phone: request.body.phone,
            birthDate: request.body.birthDate,
            email: request.body.email,
            password: request.body.password
        }

        const user = await createUser(userParams);

        return response.send(user)
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const userId = parseInt(request.params.id)

        if (isNaN(userId)) {
            return response.send({
                message: "O parâmetro id tem formato inválido. Este parâmetro precisa ser um número."
            });
        }

        /** 
        * @returns {User | null}
        **/
        const user = await findUserById(userId);

        if (user) {
            user.firstName = request.body.firstName
            user.lastName = request.body.lastName
            user.phone = request.body.phone
            user.birthDate = request.body.birthDate
            user.email = request.body.email
            user.password = request.body.password

            user.save()

            return response.send(user)
        }

        return response.send({
            message: "O user não está cadastrado no banco de dados"
        })
    }
    public async delete(request: Request, response: Response){

        return response.send({
            message: "essa rota ainda não está definida"
        })
 
    }

}