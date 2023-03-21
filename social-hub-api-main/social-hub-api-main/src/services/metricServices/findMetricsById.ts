import MetricModel from '../../models/Metric.model'

export default async function findMetricsById(metricId: number): Promise<MetricModel | null> {
  const metric = await MetricModel.findOne({
    where: {
      id: metricId,
      visible: true
    }
  })

  return metric
}