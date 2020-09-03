import { LikeModel } from "../like.model";
import { CommentModel } from "../comment.model";
import { MediaType } from "./story-item.model";



export interface FeedItemModel {
    src: string,
    likes: LikeModel[],
    comments: CommentModel[],
    caption: string,
    creator_id: number,
    feed_type: MediaType
}

