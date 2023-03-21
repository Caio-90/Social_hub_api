import express from "express"
import AthleteController from '../controllers/Athlete.controller'

const athleteController = new AthleteController();

/**
 * Athlete
 * @tags athletes
 * @typedef {object} Athlete
 * @property {number} idAthlete - id do athlete
 */
const route = express.Router()


/**
 * GET /reaction/:id
 * @property {number} idAthlete - ID do athlete
 * @summary Mostra a lista de athletes
 * @security BearerAuth
 * @tags athletes
 * @param {number} id.query.required - name param description
*/
route.get("/", (req, res) => {
  return athleteController.list(req, res); 
}) 


/**
 * GET /athlete/:id
 * @property {number} idAthlete - id do athlete
 * @summary Mostra o athlete correspondente ao id que foi buscado
 * @security BearerAuth
 * @tags athletes
 * @param {number} id.path.required - name param description
 */
route.get("/:id", (req, res) => {
  return athleteController.show(req, res);
})

/**
 * POST /athlete
 * @tags athletes
 * @summary cria um novo athlete 
 * @security BearerAuth
 * @param {Athlete} request.body.required - informações do athlete a ser inserido
 * @return {object} 200 - response
 */
route.post("/", (req, res) => {
  //essa rota adiciona um athlete no banco de dados
  return athleteController.create(req, res);
})

/**
 * PUT /athlete/:id
 * @tags athletes
 * @summary busca o athlete correspondente ao id e atualiza o registro desse athlete 
 * @security BearerAuth
 * @param {number} id.query.required - id do athlete a ser buscado
 * @param {Athlete} request.body.required - informações do athlete para ser alterada
 * @return {object} 200 - response
 */
route.put("/:id", (req, res) => { //encontrar o athlete, alterar os dados e salvar
  return athleteController.update(req, res);
})

/**
 * DELETE /athlete/:id
 * @tags athletes
 * @summary busca o athlete correspondente ao id e apaga o registro desse athlete 
 * @security BearerAuth
 * @param {number} id.query.required - id do athlete a ser buscado
 * @return {object} 200 - response
 */
route.delete("/:id", (req, res) => { //encontrar o athlete e deletar ele
  return athleteController.delete(req, res);
})

export default route
