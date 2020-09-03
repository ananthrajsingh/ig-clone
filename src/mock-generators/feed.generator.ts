import { FeedItemModel } from "../models/ui/feed-item.model";
import { getRandomLikes } from "./like.generator";
import { MediaType } from "../models/ui/story-item.model";
import { getRandomComments } from "./comment.generator";


export function getRandomFeed(): FeedItemModel {
    return {
        likes: getRandomLikes(20),
        comments: getRandomComments(20),
        caption: "This is a random caption",
        src: imageBaseUrl + `ig${imageIndexes[((index++) % 9) + 1]}.png`,
        creator_id: 1,
        feed_type: MediaType.IMAGE
    };
}


let index = 0;
let imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const imageBaseUrl = "https://ig-clone-ph.s3.us-east-2.amazonaws.com/mock-assets/";
