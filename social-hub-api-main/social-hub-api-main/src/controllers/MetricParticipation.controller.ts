import {Request, Response} from 'express'
import createMetricParticipation from '../services/metricParticipationServices/createMetricParticipation'
import deleteMetricParticipation from '../services/metricParticipationServices/deleteMetricParticipation'
import findAllMetricsParticipations from '../services/metricParticipationServices/findAllMetricsParticipations'
import findMetricParticipationById from '../services/metricParticipationServices/findMetricParticipationById'


export default class MetricParticipationController {
   
    public async list(request: Request, response: Response): Promise<Response> {
        const metricsParticipations = await findAllMetricsParticipations()

        if(metricsParticipations) {
            return response.send(metricsParticipations)
        }
        return response.send({message: 'Não há metricasParticipations'})
    }

    public async show(request: Request, response: Response): Promise<Response> {
        const metricParticipationId = parseInt(request.params.id)

        if (isNaN(metricParticipationId)) {
            return response.status(400).send({
                message: 'O parâmetro ID tem um formato inválido, ele precisa ser um número',
            })
        }

        const metricParticipation = await findMetricParticipationById(metricParticipationId)

        if (metricParticipation) {
            return response.send(metricParticipation)
        }
        
        return response.send({message: 'Não foi possível localizar no banco de dados'})
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const metricParticipationParams = {
            value: request.body.value,
        }

        if (metricParticipationParams.value == '') {
            return response.status(400).send({message: 'O campo conteúdo não pode estar vazio'})
        }

        const metricParticipation = await createMetricParticipation({value: metricParticipationParams.value})

        return response.send(metricParticipation)
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        const metricParticipationId = parseInt(request.params.metricParticipationId)

        if (isNaN(metricParticipationId)) {
            return response.status(400).send({
                message: 'Formato inválido',
            })
        }

        const metricParticipation = await deleteMetricParticipation(metricParticipationId)

        if (metricParticipation){

            return response.send({message: "Ocorreu um erro ao apagar"})
        }
        return response.send(metricParticipation)
    }
}