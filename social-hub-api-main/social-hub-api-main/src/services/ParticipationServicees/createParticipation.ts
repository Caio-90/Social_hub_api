import ParticipationModel from "../../models/Participation.model"

type CompetitionParams = {
    placing: String,
    note: String,
    proof: String,
    status: String,
    athleteId: number,
    competitionId: number,
    //eventId: number - Aguardando campo Evento ID
}

export default async function createCompetition(params: CompetitionParams): Promise<ParticipationModel>{
    const  participation = new ParticipationModel()
    participation.placing = params.placing
    participation.note = params.note
    participation.proof = params.proof
    participation.status = params.status
    participation.athleteId = params.athleteId
    participation.competitionId = params.competitionId
    //participation.eventId = params.eventId
    await participation.save()
    return participation
}