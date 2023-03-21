import ParticipationModel from "../../models/Participation.model"

export default async function  findCompetitions(): Promise<ParticipationModel[] | null> {
  return ParticipationModel.find({
    where: { 
      visible: true
    },
    relations: {
      athlete: true,
      competition: true,
      //events: true
    }
  })
}