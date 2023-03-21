import CompetitionMmodel  from "../../models/Competition.model";

export default async function(competitionId: number): Promise<CompetitionMmodel | null> {
  const competition = await CompetitionMmodel.findOne({
    where: {
      id: competitionId,
      visible: true
    },
    relations: {
      modality: true
    }
  })

  return competition
}
