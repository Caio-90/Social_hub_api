import { Request, Response} from "express"
import createMetric from '../services/metricServices/createMetric'
import deleteMetric from "../services/metricServices/deleteMetric"
import findAllMetrics from "../services/metricServices/findAllMetrics"
import findMetricsById from "../services/metricServices/findMetricsById"
import updateMetricById from "../services/metricServices/updateMetricById"

export default class MetricController {
  
  public async list(request: Request, response: Response): Promise<Response> {
    const metrics = await findAllMetrics()
    
    if(metrics) {
      return response.status(200).send(metrics)
    }

    return response.send({message: "Ocorreu um erro ao buscar as métricas"})
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const metricId = parseInt(request.params.metricId)

    if(isNaN(metricId)) {
      return response.status(400).send({
        message: "O parâmetro ID tem um formato inválido, ele precisa ser um número"
      })
    }

    const metric = await findMetricsById(metricId)

    if (metric) {
      return response.send(metric)
    }
    
    return response.send({message: "Essa métrica ainda não existe no sistema"})
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const metricParams = {
      description: request.body.description
    }

    if (metricParams.description === "") {
      return response.status(400).send({message: "O valor da descrição da métrica não pode ser nulo"})
    }

    const metric = await createMetric({description: metricParams.description})

    return response.send(metric)
  }

  public async update(request: Request, response: Response): Promise<Response> {
    let metricId = parseInt(request.params.metricId)


    let description = request.body.description

    if(isNaN(metricId)) {
      return response.status(400).send({message: "O formato de ID é inválido. Ele precisa ser um número"})
    } 

    const metric = await updateMetricById({metricId, description}) 

    if(metric) { 
      return response.status(200).send(metric)
    }

    return response.status(400).send({message: "Não foi possível fazer a alteraçào dessa métrica"})
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    let metricId = parseInt(request.params.metricId)

    if(isNaN(metricId)) { 
      return response.status(400).send({message: "O formato do Id é inválido. Ele precisa ser um número"})
    }

    const metric = await deleteMetric(metricId)

    if (metric) {
      return response.status(200).send(metric)
    }

    return response.send({message: "Ocorreu um erro ao apagar essa métrica"})
  }
}