import { LikeEntity, LikeModel } from "../models/like.model";


export function getRandomLikes(likeCounts: number = 1): LikeModel[] {
    const likes: LikeModel[] = [];
    for (let i = 0; i < likeCounts; i++) {
        likes.push({
            created_at: Date.now(),
            user_id: 1,
            entity_id: 1,
            like_entity: LikeEntity.FEED_ITEM
        });
    }
    return likes;
}


