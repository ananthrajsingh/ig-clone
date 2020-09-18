import { UserModel } from "../models/user.model";
import { allUsers } from "../server/users.mock";


export function getDummyUser(): UserModel {
    return allUsers[Math.floor(Math.random() * 10)];
}
