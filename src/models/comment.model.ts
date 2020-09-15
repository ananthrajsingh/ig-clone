export interface CommentModel {
    created_at: number | string | Date;
    user_id: number;
    entity_id: number;
    comment_entity: CommentEntity;
    content: string,
    id: number
};



export enum CommentEntity {
    FEED_ITEM = 1,
}
