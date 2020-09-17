import Server from "pretender";
import { followList } from "./users.mock";
import { getRandomPosts } from "./posts.mock";
import { PostModel } from "../models/post.model";
import { getFormattedResponse } from "./mock-server";


export function feedRoutes(server: Server) {
    server.get("/feed/:user_id", (request: any) => { // get list of users that follow the user_id
        const followerIds: number[] = followList[+request.params.user_id];
        console.log("FOLLOWER IDS", followerIds);
        const feedList: { [userId: number]: PostModel[] } = {};
        followerIds.forEach(followerId => {
            feedList[followerId] = getRandomPosts(followerId);
        });
        return getFormattedResponse(feedList);
    }, 100);
}


