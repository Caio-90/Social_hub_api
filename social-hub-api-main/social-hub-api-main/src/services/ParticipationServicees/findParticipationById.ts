import ParticipationMmodel  from "../../models/Participation.model";

export default async function(participationId: number): Promise<ParticipationMmodel | null> {
  const competition = await ParticipationMmodel.findOne({
    where: {
      id: participationId,
      visible: true
    },
    relations: {
      competition: true,
      athlete: true,
      //events: true
    }
  })

  return competition
}
