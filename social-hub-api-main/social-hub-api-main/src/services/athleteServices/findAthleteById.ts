import Athlete from "../../models/Athlete.model";


export default function findAthleteById(athleteId: number): Promise<Athlete | null> {
    
    return Athlete.findOne({
        where: { id: athleteId, visible: true },
        relations: { user: true }
    });
}