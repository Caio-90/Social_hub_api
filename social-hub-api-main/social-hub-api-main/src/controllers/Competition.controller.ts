import { Request, Response } from "express"
import createCompetition from "../services/competitionServices/createCompetition"
import findCompetitionById from "../services/competitionServices/findCompetitionById"
import findCompetitionsByModalityId from "../services/competitionServices/findCompetitionByModalityId"
import findCompetitions from "../services/competitionServices/findCompetitions"

export default class CompetitionController {
  /**
   * mostra todas as provas de uma modalidade
   *
   * @param request 
   * @param response 
   * @returns 
   */

  public async list(request: Request, response: Response): Promise<Response> {
    const modalityId = parseInt(request.params.modalityId)
    if (!isNaN(modalityId)) {
      return response.status(400).send({
        message: "Id da modalidade invalido!"
      })
    }
    const competitions = await findCompetitionsByModalityId(modalityId)
    if (competitions) {
      return response.send(competitions)
    }
    return response.send({ message: "Essa modalidade ainda não possui provas" })
  }

  public async listAll(request: Request, response: Response): Promise<Response> {
    const competitions = await findCompetitions()
    if (competitions) {
      return response.send(competitions)
    }
    return response.send({ message: "Essa modalidade ainda não possui provas" })
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const competitionId = parseInt(request.params.id)
    if (!isNaN(competitionId)) {
      return response.status(400).send({
        message: "Não existe uma prova com este ID"
      })
    }
    const competition = await findCompetitionById(competitionId)
    if (competition) {
      return response.send(competition)
    }
    return response.send({ message: "Não foi possível localizar esta prova" })
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const competitionParams = {
      description: request.body.description,
      classe: request.body.classe,
      weight: request.body.weight,
      type: request.body.type,
      content: request.body.content,
      modalityId: request.body.modalityId
    }
    const competition = await createCompetition(competitionParams);
    return response.send(competition)
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const competitionId = parseInt(request.params.competitionId)
    if (!isNaN(competitionId)) {
      return response.send({
        message: "ID da prova invalido"
      })
    }

    const competition = await findCompetitionById(competitionId)

    if (competition) {
      competition.visible = false
      competition.save()
      return response.send(competition)
    }

    return response.send({ message: "A prova não pode ser apagada"})
  }
}