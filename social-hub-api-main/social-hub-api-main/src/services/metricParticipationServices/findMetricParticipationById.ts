import MetricParticipationModel from "../../models/MetricParticipation.model";


export default async function(metricParticipationId: number): Promise<MetricParticipationModel | null> {
    const metricParticipation = await MetricParticipationModel.findOne({
        where:{
            id: metricParticipationId,
            visible: true
        },
    })

    return metricParticipation
}