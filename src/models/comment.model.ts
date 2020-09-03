export interface CommentModel {
    created_at: number | string | Date;
    user_id: number;
    entity_id: number;
    comment_entity: CommentEntity;
    content: string
};



export enum CommentEntity {
    FEED_ITEM = 1,
}
