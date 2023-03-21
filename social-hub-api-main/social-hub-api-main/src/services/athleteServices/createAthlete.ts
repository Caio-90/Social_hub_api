import Athlete from '../../models/Athlete.model'
import createUser from '../userServices/createUser'

type AthleteParams = {
    firstName: String,
    lastName: String,
    phone: String,
    birthDate: Date,
    email: String,
    password: String
}

export default async function createAthlete(params: AthleteParams): Promise<Athlete> {
    const pessoa = await createUser(params)

    const athlete = new Athlete()
    athlete.user = pessoa
    await athlete.save()

    return athlete
}
