// @ts-ignore
import { CommentEntity, CommentModel } from "../models/comment.model";


export function getRandomComments(commentCounts: number = 1): CommentModel[] {
    const comments: CommentModel[] = [];
    for (let i = 0; i < commentCounts; i++) {
        comments.push({
            created_at: Date.now(),
            user_id: 1,
            entity_id: 1,
            content: "Lorem ipsum, impsum dorset.",
            comment_entity: CommentEntity.FEED_ITEM
        });
    }
    return comments;
}


