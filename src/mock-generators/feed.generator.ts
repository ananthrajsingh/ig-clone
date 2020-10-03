import { FeedItemModel } from "../models/ui/feed-item.model";
import { getRandomLikes } from "./like.generator";
import { MediaType } from "../models/ui/story-item.model";
import { getRandomComments } from "./comment.generator";
import { imageBaseUrl } from "../utils/S3.helper";
import {LikeModel} from "../models/like.model";
import {CommentModel} from "../models/comment.model";
import {UserModel} from "../models/user.model";
import {PostModel} from "../models/post.model";
import {getDummyUser} from "./user.generator";


export function getRandomFeed(): FeedItemModel {
    return {
        likes: getRandomLikes(20),
        comments: getRandomComments(20),
        caption: "This is a random caption",
        src: imageBaseUrl + `mock-assets/ig${imageIndexes[((index++) % 9) + 1]}.png`,
        creator_id: 1,
        feed_type: MediaType.IMAGE
    };
}

export function getRandomPostModel(): PostModel {
    return {
        id: 3,
        url: imageBaseUrl + `mock-assets/ig${imageIndexes[((index++) % 9) + 1]}.png`,
        creator_id: 3,
        caption: "Summer Vibes 2020 🏖️🏖️",
        likes: getRandomLikes(),
        comments: getRandomComments(),
        created_at: Date.prototype,
        creator: getDummyUser()
    }
}

let index = 0;
let imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


