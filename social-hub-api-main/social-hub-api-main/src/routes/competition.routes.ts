import express from "express"
import CompetitionController from "../controllers/Competition.controller"

const competitionController = new CompetitionController()

/**
 * Provas
 * @tags provas
 * @typedef {object} Competition
 * @property {string} description
 * @property {string} classe
 * @property {string} weight
 * @property {string} content
 * @property {number} modalityId
 *  
 */

const route = express.Router()

/**
 * GET /competition
 * @summary Mostra uma lista de todas as provas cadastradas no sistema
 * @security BearerAuth
 * @tags provas
 * @return {array<Competion>} 200 - success respones - application/json
 * @return {object} 400 - Bad request response
*/
route.get("/", (req, res) => {
  return competitionController.listAll(req, res);
}) 


/**
 * GET /competition/{modalityId}
 * @summary Mostra a lista de provas de uma modalidade
 * @security BearerAuth
 * @tags provas
 * @return {array<Competition>} 200 - succes response - application/json
 * @return {object} 400 - Bad request response
 * @param {number} modalityId.path.required - Id da modalidade onde devem ser buscadas as provas
 */
route.get("/:modalityId", (req, res) => {
  return competitionController.list(req, res)
})

/**
 * POST /competition/
 * @tags provas
 * @summary cria uma nova prova
 * @security BearerAuth
 * @param {Competition} request.body.required - informações necessárias para criar uma prova
 * @return {object} 200 - response * 
 */
route.post("/", (req, res) => {
  return competitionController.create(req, res)
})

/**
 * GET /competition/:id
 * @property {number} idCompetition - ID da prova
 * @summary Mostra a prova correspondente ao id que foi buscado
 * @security BearerAuth
 * @tags provas
 * @param {number} id.path.required - name param description
 */
 route.get("/:id", (req, res) => {
  return competitionController.show(req, res);
})


/**
 * DELETE /competition/{competitionId}
 * @tags provas
 * @summary deixa a prova invisivel para o usuario
 * @param {number} competitionId.path.required - ID da prova 
 * @return {object} 200 - response
 */
route.delete("/:modalityId/", (req, res) => {
  return competitionController.delete(req, res)
})

export default route