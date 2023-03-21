import MetricParticipationModel from "../../models/MetricParticipation.model"
import findMetricParticipationById from "./findMetricParticipationById"

export default async function deleteMetricParticipation(id: number): Promise<MetricParticipationModel | null> {
    const metricParticipation = await findMetricParticipationById(id)

    if(!metricParticipation) {
        return null
    }

    metricParticipation.visible = false
    metricParticipation.save()

    return metricParticipation
}