import { LikeModel } from "./like.model";
import { CommentModel } from "./comment.model";
import { UserModel } from "./user.model";



export interface PostModel {
    id: number
    url: string
    creator_id: number
    caption: string
    likes?: LikeModel[]
    comments: CommentModel[]
    created_at: Date,
    creator?: UserModel
}
