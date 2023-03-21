import express from "express"
import ParticipationController from "../controllers/Participation.controller"

const participationController = new ParticipationController()

/**
 * Participações
 * @tags participações
 * @typedef {object} Participation
 * @property {number} id
 * @property {string} content
 */
const route = express.Router()

/**
 * GET /participation
 * @summary Mostra uma lista de todas as participações
 * @security BearerAuth
 * @tags participações
 * @return {array<Participation} 200 - success respones - application/json
 * @return {object} 400 - Bad request response
*/
route.get("/", (req, res) => {
  return participationController.listAll(req, res); 
}) 


/**
 * GET /participation/{competitionId}
 * @summary Mostra a lista de participações em uma prova
 * @security BearerAuth
 * @tags participações
 * @return {array<Participation>} 200 - succes response - application/json
 * @return {object} 400 - Bad request response
 * @param {number} competitionId.path.required - Id da competição onde devem ser buscadas as participações
 */
route.get("/:participationId", (req, res) => {
  return participationController.listByCompetitions(req, res)
})

/**
 * GET /participation/{athleteId}
 * @summary Mostra a lista de participações de um atleta
 * @security BearerAuth
 * @tags participações
 * @return {array<Participation>} 200 - succes response - application/json
 * @return {object} 400 - Bad request response
 * @param {number} athleteId.path.required - Id do atleta onde devem ser buscadas as participações
 */
 route.get("/:athleteId", (req, res) => {
  return participationController.listByAthletes(req, res)
})


/**
 * POST /participation/{athleteId}/
 * @tags participações
 * @summary cria uma nova participação
 * @security BearerAuth
 * @param {Participation} request.body - informações necessárias para criar uma participação
 * @param {number} athleteId.path.required - Id do atleta ser referenciado
 * @return {object} 200 - response
 */
route.post("/:athleteId/", (req, res) => {
  return participationController.create(req, res)
})

/**
 * GET /participation/:id
 * @property {number} idCompetition - ID da participação
 * @summary Mostra a participação correspondente ao id que foi buscado
 * @security BearerAuth
 * @tags participações
 * @param {number} id.path.required - name param description
 */
 route.get("/:id", (req, res) => {
  return participationController.show(req, res);
})


/**
 * DELETE /participation/{participationId}
 * @tags participações
 * @summary deixa a participação invisivel para o usuario
 * @param {number} participationId.path.required - ID da participação
 * @return {object} 200 - response
 */
route.delete("/:participationId/", (req, res) => {
  return participationController.delete(req, res)
})

export default route