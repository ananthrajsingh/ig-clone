import { UserModel } from "../models/user.model";


export function getDummyUser():UserModel {
    return {
        username: makeId(6),
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

function makeId(length: number): string {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
