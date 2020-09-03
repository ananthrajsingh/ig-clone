export interface StoryItemModel {
    url: string
    seen: boolean
    type: MediaType
    created_at: number
}



export enum MediaType {
    IMAGE,
    VIDEO
}



