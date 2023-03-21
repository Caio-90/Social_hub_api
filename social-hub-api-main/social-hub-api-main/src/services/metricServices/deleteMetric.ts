import MetricModel from "../../models/Metric.model";
import findMetricsById from "./findMetricsById";

export default async function deleteMetric(id: number): Promise<MetricModel | null> {
  const metric = await findMetricsById(id)

  if(!metric) {
    return null
  }

  metric.visible = false
  metric.save()

  return metric
}