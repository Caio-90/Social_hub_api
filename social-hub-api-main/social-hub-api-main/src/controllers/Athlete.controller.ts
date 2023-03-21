import { Request, Response } from "express"
import Athlete from "../models/Athlete.model"
import createAthlete from "../services/athleteServices/createAthlete"
import findAthleteById from "../services/athleteServices/findAthleteById"


export default class AthleteController {

    public async list(request: Request, response: Response): Promise<Response> {
        const athletes = await Athlete.find({
            where: {visible: true },
            relations: { user: true}
        });

        return response.send(athletes);
    }

    public async show(request: Request, response: Response): Promise<Response> {
        const athleteId = parseInt(request.params.id);

        if (isNaN(athleteId)) {
            return response.send({
                message:
                    "O parâmetro ID tem formato inválido. Este parâmetro precisa ser um número.",
            });
        }

        const athlete = await findAthleteById(athleteId);

        if (athlete) {
            return response.send(athlete);
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

        const athlete = await createAthlete(userParams);

        return response.send(athlete)
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const athleteId = parseInt(request.params.id)

        if (isNaN(athleteId)) {
            return response.send({
                message: "O parâmetro id tem formato inválido. Este parâmetro precisa ser um número."
            });
        }

        const athlete = await findAthleteById(athleteId);

        if (athlete) {
            athlete.user.firstName = request.body.firstName
            athlete.user.lastName = request.body.lastName
            athlete.user.phone = request.body.phone
            athlete.user.birthDate = request.body.birthDate
            athlete.user.email = request.body.email
            athlete.user.password = request.body.password

            athlete.user.save()

            return response.send(athlete)
        }

        return response.send({
            message: "O atleta não está cadastrado no banco de dados"
        })
    }

    public async delete(request: Request, response: Response){

        const athleteId = parseInt(request.params.id)

        if (isNaN(athleteId)) {
            return response.send({
                message: "O parâmetro id tem formato inválido. Este parâmetro precisa ser um número."
            });
        }

        const athlete = await findAthleteById(athleteId)

        if (athlete) {
            athlete.visible = false

            athlete.save()

            return response.send(athlete)
        }
        return response.send({message: "Atleta não encontrado"})
    }

}