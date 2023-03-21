import express from "express"
import EventController from '../controllers/Event.controller'

const eventController = new EventController;

/**
 * Event
 * @tags events
 * @typedef {object} Event
 * @property {String } date - Data
 * @property {string} name - Name
 * @property {string} description - Descrição
 * @property {string} localization - Localização
 */
const route = express.Router()

/**
 * GET /event
 * @summary Show the list of the events
 * @security BearerAuth
 * @tags events
 * @return {array<Event>} 200 - success respones - application/json
 * @return {object} 400 - Bad request response
*/
route.get("/", (req, res) => {
  return eventController.list(req, res); 
})


/**
 * GET /event/{id}
 * @property {number} id - ID of event
 * @summary Mostra o evento correspondente ao id que foi buscado
 * @security BearerAuth
 * @tags events
 * @param {number} id.path.required - name param description
 */
route.get("/:id/", (req, res) => {
  return eventController.show(req, res);
})

/**
 * POST /event
 * @tags events
 * @summary create new event
 * @security BearerAuth
 * @param {Event} request.body.required - Information of the event to be inserted
 * @return {object} 200 - response
 */
route.post("/", (req, res) => {
  return eventController.create(req, res);
})

/**
 * PUT /event/{id}
 * @tags events
 * @summary find the event in the database and update 
 * @security BearerAuth
 * @param {number} id.path - id of the event
 * @param {Event} request.body.description - Nova descrição do evento
 * @param {Event} request.body.name - Novo nome do evento
 * @param {Event} request.body.date - Nova data do evento
 * @param {Event} request.body.localization - Nova localização do evento
 * @return {object} 200 - response
 * @return {object} 400 - Bad request response
 */
route.put("/:id", (req, res) => { 
  return eventController.update(req, res);
})

/**
 * DELETE /event/{id}
 * @tags events
 * @summary find the idevent and set visibility false
 * @security BearerAuth
 * @param {number} id.path - id of the event
 * @return {object} 200 - response
 * @return {object} 400 - Bad request response
 */
route.delete("/:id", (req, res) => {
  return eventController.delete(req, res);
})

export default route
