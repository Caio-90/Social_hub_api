import UserModel from "../../models/User.model";


export default function findUserById(userId: number): Promise<UserModel | null> {
    return UserModel.findOne({
        where: { id: userId, visible: true},
    });
}