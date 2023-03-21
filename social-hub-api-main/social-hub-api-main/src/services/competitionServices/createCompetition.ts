import CompetitionModel from "../../models/Competition.model"

type CompetitionParams = {
    description: String,
    classe: String,
    weight: String,
    type: String,
    modalityId: number
}

export default async function createCompetition(params: CompetitionParams): Promise<CompetitionModel>{
    const competition = new CompetitionModel()
    competition.classe = params.classe
    competition.description = params.description
    competition.weight = params.weight
    competition.type = params.type
    competition.modalityId = 2
    await competition.save()
    return competition
}