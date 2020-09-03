import placeholder1 from '../images/placeholder_2.png'
import placeholder2 from '../images/placeholder_3.png'
import {User} from "./User";

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

export function getDummyStoryItemArray(user: User) {
    return [
        {url: placeholder1, type: MediaType.IMAGE, seen: false, timestamp: Date.now()},
        {url: placeholder2, type: MediaType.IMAGE, seen: false, timestamp: Date.now() + 1},
        ]
}
