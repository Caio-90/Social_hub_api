import MetricParticipationModel from "../../models/MetricParticipation.model"


export default async function findAllMetricsParticipations(): Promise<MetricParticipationModel[] | null> {
    const metricsParticipations = await MetricParticipationModel.find()
    return metricsParticipations
}