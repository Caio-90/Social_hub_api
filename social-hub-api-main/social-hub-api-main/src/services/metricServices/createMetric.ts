import MetricModel from "../../models/Metric.model"

type CommentParams = {
  description: string
}

export default async function createMetric(params: CommentParams): Promise<MetricModel> {
  const metrics = new MetricModel()
  metrics.description = params.description
  await metrics.save()
  return metrics
}