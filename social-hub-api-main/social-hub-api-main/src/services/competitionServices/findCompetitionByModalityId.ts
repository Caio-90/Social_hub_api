import CompetitionModel from "../../models/Competition.model"

export default async function  findCompetitionsByModalityID(modalityId: number): Promise<CompetitionModel[] | null> {
  return CompetitionModel.find({
    where: { 
      modalityId: modalityId,
      visible: true
    },
    relations: {
      modality: true
    }
  })
}