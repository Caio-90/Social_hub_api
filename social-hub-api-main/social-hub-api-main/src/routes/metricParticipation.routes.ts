import express from "express"
import MetricsParticipationsController from "../controllers/MetricParticipation.controller"

const metricsParticipationsController = new MetricsParticipationsController()

/**
 * MetricParticipation
 * @tags metricsParticipations
 * @typedef {object} MetricParticipation
 * @property {number} id
 * @property {int} value
 */
const route = express.Router()

/**
 * GET /metricsParticipations
 * @summary Mostra a lista de metricsParticipations no sistema
 * @security BearerAuth
 * @tags metricsParticipations
 * @return {array<MetricParticipation>} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 */
route.get("/", (req, res) => {
    return metricsParticipationsController.list(req, res)
})

/**
 * GET /metricsParticipations/{metricParticipationId}
 * @summary Busca um metricParticipation
 * @security BearerAuth
 * @tags metricsParticipations
 * @return {MetricParticipation} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 * @param {number} metricParticipationId.path.required
 */
route.get("/:metricParticipationId/", (req, res) => {
    return metricsParticipationsController.show(req, res)
})

/**
 * POST /metricsParticipations
 * @tags metricsParticipations
 * @summary cria um novo metricParticipation
 * @security BearerAuth
 * @param {MetricParticipation} request.body - informações necessárias para criar um metricParticipation
 * @return {object} 200 - response
 */
route.post("/", (req, res) => {
    return metricsParticipationsController.create(req, res)
})

/**
 * DELETE /metricsParticipations/{metricParticipationId}
 * @tags metricsParticipations
 * @summary deixa o metricParticipation invisível para o usuário
 * @param {number} metricParticipationId.path.required - Id do metricParticipation a ser removido
 * @return {object} 200 - response
 */
route.delete("/:metricParticipationId/", (req, res) => {
    return metricsParticipationsController.delete(req, res)
})

export default route