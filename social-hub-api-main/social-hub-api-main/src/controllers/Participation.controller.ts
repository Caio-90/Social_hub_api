import { Request, Response } from "express"
import createParticipation from "../services/ParticipationServicees/createParticipation"
import findParticipation from "../services/ParticipationServicees/findParticipation"
import findParticipationsByCompetitionId from "../services/ParticipationServicees/findParticipationsByCompetitionId"
import findParticipationsByAthleteId from "../services/ParticipationServicees/findParticipationsByAthlete"
import findParticipationById from "../services/ParticipationServicees/findParticipationById"

export default class CompetitionController {
    /**
     * mostra todas as participações
     *
     * @param request 
     * @param response 
     * @returns 
     */

    public async listAll(request: Request, response: Response): Promise<Response> {
        const participations = await findParticipation()
        if (participations) {
            return response.send(participations)
        }
        return response.send({ message: "Ainda não há nenhuma participação" })
    }

    public async listByCompetitions(request: Request, response: Response): Promise<Response> {
        const competitionId = parseInt(request.params.competitionId)
        if (!isNaN(competitionId)) {
            return response.status(400).send({
                message: "Id da prova inválido!"
            })
        }
        const participations = await findParticipationsByCompetitionId(competitionId)
        if (participations) {
            return response.send(participations)
        }
        return response.send({ message: "Não há participações nesta prova" })
    }

    public async listByAthletes(request: Request, response: Response): Promise<Response> {
        const athleteId = parseInt(request.params.athleteId)
        if (!isNaN(athleteId)) {
            return response.status(400).send({
                message: "Id da prova inválido!"
            })
        }
        const participations = await findParticipationsByAthleteId(athleteId)
        if (participations) {
            return response.send(participations)
        }
        return response.send({ message: "Não há participações deste atleta" })
    }


    public async show(request: Request, response: Response): Promise<Response> {
        const participationId = parseInt(request.params.id)
        if (!isNaN(participationId)) {
            return response.status(400).send({
                message: "Não existe uma participação com este ID"
            })
        }
        const competition = await findParticipationById(participationId)
        if (competition) {
            return response.send(competition)
        }
        return response.send({ message: "Não foi possível localizar esta participação" })
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const participationParams = {
            placing: request.body.placing,
            note: request.body.note,
            proof: request.body. proof,
            status: request.body.status,
            athleteId: request.body.athlete,
            competitionId: request.body.competition,
            //eventId: request.body.event
        }
        const participation = await createParticipation(participationParams);
        return response.send(participation)
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        const participationId = parseInt(request.params.participationId)
        if (!isNaN(participationId)) {
            return response.send({
                message: "ID da participação inválido"
            })
        }

        const participation = await findParticipationById(participationId)

        if (participation) {
            participation.visible = false
            participation.save()
            return response.send(participation)
        }

        return response.send({ message: "A participação não pode ser apagada" })
    }
}