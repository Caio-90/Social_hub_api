import MetricParticipationModel from "../../models/MetricParticipation.model"


type MetricParticipationParams = {
    value: number
}

export default async function createMetricParticipation(params: MetricParticipationParams): Promise<MetricParticipationModel> {
    const metricsParticipations = new MetricParticipationModel()
    metricsParticipations.value = params.value
    await metricsParticipations.save()
    return metricsParticipations
}