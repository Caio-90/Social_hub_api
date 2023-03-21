import UserModel from "../../models/User.model"

type UserParams = {
    firstName: String,
    lastName: String,
    phone: String,
    birthDate: Date,
    email: String,
    password: String
}

export default async function createUser(params: UserParams): Promise<UserModel>{
    //recebe os dados do usuário e retorna o usuário criado
    const user = new UserModel()
    user.firstName = params.firstName
    user.lastName = params.lastName
    user.phone = params.phone
    user.birthDate = params.birthDate
    user.email = params.email
    user.password = params.password
    await user.save()
    return user
}