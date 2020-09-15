import { LikeModel } from "./like.model";
import { CommentModel } from "./comment.model";



export interface PostModel {
    id: number
    url: string
    creator_id: number
    caption: string
    likes?: LikeModel[]
    comments: CommentModel[]
    created_at: Date
}
