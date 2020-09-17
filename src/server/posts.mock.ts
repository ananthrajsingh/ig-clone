import Server from "pretender";
import { getFormattedResponse } from "./mock-server";
import { LikeEntity, LikeModel } from "../models/like.model";
import { MAX_USER_COUNT } from "./users.mock";
import { CommentEntity, CommentModel } from "../models/comment.model";
import { PostModel } from "../models/post.model";


export function postsMocks(server: Server) {
    server.get("/posts/:user_id", (request: any) => { // get list of users that follow the user_id
        const posts: PostModel[] = getRandomPosts(+request.params.user_id);
        return getFormattedResponse(posts);
    }, 500);
}


export function getRandomPosts(userId: number): PostModel[] {
    if (!savedPosts[userId]) {
        const randomPostsCounts = Math.floor(Math.random() * (20)) + 1;
        const randomPosts: PostModel[] = [];
        for (let i = 0; i < randomPostsCounts; i++) {
            randomPosts.push({
                id: (userId * 1000) + i,
                url: `https://ig-clone-ph.s3.us-east-2.amazonaws.com/mock-assets/ig${Math.floor(Math.random() * (10)) + 1}.png`,
                creator_id: userId,
                caption: "Check this out!",
                likes: getRandomLikes((userId * 1000) + i, LikeEntity.FEED_ITEM),
                comments: getRandomComments((userId * 1000) + i, CommentEntity.FEED_ITEM),
                created_at: randomDate()
            });
        }
        savedPosts[userId] = randomPosts;
    }
    return savedPosts[userId];
}


function getRandomLikes(entity_id: number, like_entity: LikeEntity): LikeModel[] {
    const randomLikeCount = Math.floor(Math.random() * (MAX_USER_COUNT)) + 1;
    const randomLikes: LikeModel[] = [];
    for (let i = 0; i < randomLikeCount; i++) {
        const Uid = ((randomLikeCount + i) % MAX_USER_COUNT) + 1;
        randomLikes.push({
            created_at: randomDate(),
            user_id: Uid,
            id: (Uid * 999) + entity_id,
            entity_id,
            like_entity
        });
    }
    return randomLikes;
}


function getRandomComments(entity_id: number, comment_entity: CommentEntity): CommentModel[] {
    const randomCommentCount = Math.floor(Math.random() * (MAX_USER_COUNT)) + 1;
    const randomComments: CommentModel[] = [];
    for (let i = 0; i < randomCommentCount; i++) {
        const Uid = ((randomCommentCount + i) % MAX_USER_COUNT) + 1;

        randomComments.push({
            created_at: randomDate(),
            user_id: Uid,
            id: (Uid * 999) + entity_id,
            entity_id,
            comment_entity,
            content: "Looks so good <3"
        });
    }
    return randomComments;
}


function randomDate(start = new Date(2012, 0, 1), end = new Date()) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


const savedPosts: any = {};
