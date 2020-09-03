import { UserModel } from "../models/user.model";


export function getDummyUser():UserModel {
    return {
        username: "johndoe",
        avatar: "../../images/placeholder_2.png",
        firstName: "John",
        lastName: "Doe",
        verified: false,
        male: true,
        followers: 34,
        following: 942313,
        posts: 1
    };
}
