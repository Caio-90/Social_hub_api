import CompetitionModel from "../../models/Competition.model"

export default async function  findCompetitions(): Promise<CompetitionModel[] | null> {
  return CompetitionModel.find({
    where: { 
      visible: true
    },
    relations: {
      modality: true
    }
  })
}