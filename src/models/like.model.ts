export interface LikeModel {
    id:number;
    created_at: number | string | Date;
    user_id: number;
    entity_id: number;
    like_entity: LikeEntity
};



export enum LikeEntity {
    FEED_ITEM = 1,
    COMMENT
}
