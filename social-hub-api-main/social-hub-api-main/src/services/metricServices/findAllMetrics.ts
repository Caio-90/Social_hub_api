import MetricModel from "../../models/Metric.model";

export default async function findAllMetrics(): Promise<MetricModel[] | null> {
  const metrics = await MetricModel.find({where: {
    visible: true
  }})
  return metrics
}