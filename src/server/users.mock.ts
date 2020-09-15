import Server from "pretender";
import { GENDER, UserModel } from "../models/user.model";
import { imageBaseUrl } from "../utils/S3.helper";
import { getFormattedResponse } from "./mock-server";


export function userRoutes(server: Server) {
    server.get("/followers/:user_id", (request: any) => { // get list of users that follow the user_id
        const followers: number[] = followList[+request.params.id];
        return getFormattedResponse(includeUsers(followers));
    }, 500);

    server.get("/followers/count/:user_id", (request: any) => { // get count of list of users that follow the user_id
        const followers: number[] = followList[+request.params.id];
        return getFormattedResponse(followers.length);
    }, 500);


    server.get("/following/:user_id", (request: any) => { // get list of users that are followed by user_id
        const following: number[] = [];
        for (const id of Object.keys(followList)) {
            if (followList[id].includes(+request.params.id)) {
                following.push(+id);
            }
        }
        return getFormattedResponse(includeUsers(following));
    }, 500);

    server.get("/following/count/:user_id", (request: any) => { // get list of users that follow the user_id
        const following = [];
        for (const id of Object.keys(followList)) {
            if (followList[id].includes(+request.params.id)) {
                following.push(id);
            }
        }
        return getFormattedResponse(following.length);
    }, 500);

    server.get("/user/:user_id", (request: any) => { // get user-details
        return getFormattedResponse(allUsers.find(user => +user.id === +request.params.user_id));
    }, 0);
}


function includeUsers(userIds: number[]): UserModel[] {
    return userIds.map(followerId => allUsers[followerId]);
}


export const allUsers: UserModel[] = [
    {
        username: "dianne",
        avatar: imageBaseUrl + "user-profiles/u1.png",
        firstName: "Dianne",
        lastName: "Dodd",
        verified: false,
        gender: GENDER.FEMALE,
        id: 1
    },
    {
        id: 2,
        username: "mary",
        avatar: imageBaseUrl + "user-profiles/u2.png",
        firstName: "Mary",
        lastName: "Houpt",
        verified: false,
        gender: GENDER.FEMALE,
    },
    {
        id: 3,
        username: "janice",
        avatar: imageBaseUrl + "user-profiles/u3.png",
        firstName: "Janice",
        lastName: "Morgan",
        verified: false,
        gender: GENDER.FEMALE,
    },
    {
        id: 4,
        username: "eva",
        avatar: imageBaseUrl + "user-profiles/u4.png",
        firstName: "Eva",
        lastName: "McAlpine",
        verified: false,
        gender: GENDER.FEMALE,
    },
    {
        id: 5,
        username: "isabelle",
        avatar: imageBaseUrl + "user-profiles/u5.png",
        firstName: "Isabelle",
        lastName: "MacFarland",
        verified: false,
        gender: GENDER.FEMALE,
    },
    {
        id: 6,
        username: "lucinda",
        avatar: imageBaseUrl + "user-profiles/u6.png",
        firstName: "Lucinda",
        lastName: "Lake",
        verified: false,
        gender: GENDER.FEMALE,
    }, {
        id: 7,
        username: "boan",
        avatar: imageBaseUrl + "user-profiles/u7.png",
        firstName: "Poppy",
        lastName: "Boan",
        verified: false,
        gender: GENDER.FEMALE,
    },
    {
        id: 8,
        username: "maddison",
        avatar: imageBaseUrl + "user-profiles/u8.png",
        firstName: "Maddison",
        lastName: "Nepean",
        verified: false,
        gender: GENDER.FEMALE,
    },
    {
        id: 9,
        username: "will",
        avatar: imageBaseUrl + "user-profiles/u9.png",
        firstName: "Will",
        lastName: "Palmer",
        verified: false,
        gender: GENDER.MALE,
    },
    {
        id: 10,
        username: "rose",
        avatar: imageBaseUrl + "user-profiles/u10.png",
        firstName: "Rose",
        lastName: "Willmore",
        verified: false,
        gender: GENDER.FEMALE,
    }
];

const followList: any = [ // "values" are the userIds that follow the "key"
    {
        1: [2, 3, 4, 5, 6, 7, 8, 9, 10],
        2: [1, 3, 4, 5, 7, 8, 9, 10],
        3: [1, 2, 4, 5, 8, 9, 10],
        4: [1, 2, 3, 6, 7, 8, 10],
        5: [1, 2, 3, 4, 6, 7, 9, 10],
        6: [1, 2, 3, 4, 5, 7, 8, 9, 10],
        7: [1, 2, 3, 4, 5, 6, 8, 9],
        8: [2, 3, 4, 5, 6, 7],
        9: [1, 2, 3, 4, 5, 6, 7, 8, 10],
        10: [2, 4, 5, 6, 7]
    }
];


export const MAX_USER_COUNT = 10;
