import ParticipationModel from "../../models/Participation.model"

export default async function  findCompetitionsByAthleteID(athleteId: number): Promise<ParticipationModel[] | null> {
  return ParticipationModel.find({
    where: { 
      athleteId: athleteId,
      visible: true
    },
    relations: {
      competition: true,
      athlete:true
      //events:true
    }
  })
}