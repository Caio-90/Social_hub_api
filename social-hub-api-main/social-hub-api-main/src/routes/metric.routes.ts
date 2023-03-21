import express from "express"
import MetricController from "../controllers/Metric.controller"

const metricController = new MetricController()
/**
 * Metric
 * @tags metrics
 * @typedef {object} Metric
 * @property {number} id
 * @property {string} description
 */
const route = express.Router()

/**
 * GET /metric
 * @summary Mostra a lista de métricas no sistema
 * @security BearerAuth
 * @tags metrics
 * @return {array<Metric>} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 */
route.get("/", metricController.list)

/**
 * GET /metric/{metricId}
 * @summary Busca uma métrica
 * @security BearerAuth
 * @tags metrics
 * @param {number} metricId.path - id da métrica a ser buscada
 * @return {Metric} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 */
route.get("/:metricId", (req, res) => metricController.show(req, res))

/**
 * POST /metric
 * @tags metrics
 * @summary cria uma nova métrica
 * @security BearerAuth
 * @param {Metric} request.body - informações necessárias para criar uma métrica
 * @return {object} 200 - response
 * @return {object} 400 - Bad request response
 */
route.post("/", metricController.create)

/**
 * PUT /metric/{metricId}
 * @tags metrics
 * @summary cria uma nova métrica
 * @security BearerAuth
 * @param {number} metricId.path - Id da métrica a ser editada
 * @param {Metric} request.body.description - Nova descriçào da métrica
 * @return {object} 200 - response
 * @return {object} 400 - Bad request response
 */
route.put("/:metricId", (req, res) => metricController.update(req, res))

/**
 * DELETE /metric/{metricId}
 * @tags metrics
 * @summary deixa a métrica invisível para o usuário
 * @param {number} metricId.path.required - Id da métrica a ser removida
 * @return {object} 200 - response
 */
route.delete("/:metricId", (req, res) => metricController.delete(req, res))

export default route