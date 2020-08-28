import placeholder from '../../images/placeholder_2.png'

export interface StoryItem {
    url: string
    seen: boolean
    type: MediaType
    timestamp: number
}

export enum MediaType {
    IMAGE,
    VIDEO
}

export function getDummyStoryItemArray() {
    return [{url: placeholder, type: MediaType.IMAGE, seen: false, timestamp: Date.now()}]
}
