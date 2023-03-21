import express from "express"
import ModalityController from '../controllers/Modality.controller'

const modalityController = new ModalityController;

/**
 * Modality
 * @tags modalities
 * @typedef {object} Modality
 * @property {string} description - Descrição
 */
const route = express.Router()

/**
 * GET /modality
 * @summary Show the list of the modalities
 * @security BearerAuth
 * @tags modalities
 * @return {array<Modality>} 200 - success respones - application/json
 * @return {object} 400 - Bad request response
*/
route.get("/", (req, res) => {
  return modalityController.list(req, res); 
}) 


/**
 * GET /modality/{id}
 * @property {number} id - ID of modality
 * @summary Mostra a modalidde correspondente ao id que foi buscado
 * @security BearerAuth
 * @tags modalities
 * @param {number} id.path.required - name param description
 */
route.get("/:id/", (req, res) => {
  return modalityController.show(req, res);
})

/**
 * POST /modality
 * @tags modalities
 * @summary create new modality
 * @security BearerAuth
 * @param {Modality} request.body.required - Information of the modality to be inserted
 * @return {object} 200 - response
 */
route.post("/", (req, res) => {
  return modalityController.create(req, res);
})

/**
 * PUT /modality/{id}
 * @tags modalities
 * @summary find the modality in the database and update 
 * @security BearerAuth
 * @param {number} id.path - id of the modality
 * @param {Modality} request.body.description - Nova descriçào da modalidade
 * @return {object} 200 - response
 * @return {object} 400 - Bad request response
 */
route.put("/:id", (req, res) => { 
  return modalityController.update(req, res);
})

/**
 * DELETE /modality/{id}
 * @tags modalities
 * @summary find the idmodality and delete
 * @security BearerAuth
 * @param {number} id.path - id of the modality
 * @return {object} 200 - response
 * @return {object} 400 - Bad request response
 */
route.delete("/:id", (req, res) => {
  return modalityController.delete(req, res);
})

export default route
