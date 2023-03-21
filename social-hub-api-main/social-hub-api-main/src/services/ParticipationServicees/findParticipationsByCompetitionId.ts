import ParticipationModel from "../../models/Participation.model"

export default async function  findCompetitionsByModalityID(competitionId: number): Promise<ParticipationModel[] | null> {
  return ParticipationModel.find({
    where: { 
      competitionId: competitionId,
      visible: true
    },
    relations: {
      competition: true,
      athlete:true
      //events:true
    }
  })
}