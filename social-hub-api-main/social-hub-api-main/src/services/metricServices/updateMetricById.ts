import MetricModel from "../../models/Metric.model";
import findMetricsById from "./findMetricsById";

type UpdateMetricParams = {
  metricId: number
  description: string
}

export default async function updateMetricById(params: UpdateMetricParams): Promise<MetricModel | null> {
  const metric = await findMetricsById(params.metricId)

  if (metric) {
    metric.description = params.description
    metric.id = params.metricId

    metric.save()
  }
  
  return metric
}