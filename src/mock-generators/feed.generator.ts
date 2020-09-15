import { FeedItemModel } from "../models/ui/feed-item.model";
import { getRandomLikes } from "./like.generator";
import { MediaType } from "../models/ui/story-item.model";
import { getRandomComments } from "./comment.generator";
import { imageBaseUrl } from "../utils/S3.helper";


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


let index = 0;
let imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


