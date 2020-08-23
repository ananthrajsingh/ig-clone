import placeholder from '../../images/placeholder_2.png'
import {AvatarProps} from "grommet";

export enum MediaType {
    IMAGE,
    VIDEO
}

export interface StoryItem {
    url: string
    seen: boolean
    type: MediaType
    timestamp: number
}

export function getDummyStoryItem() {
    return [{url: placeholder, type: MediaType.IMAGE, seen: false, timestamp: Date.now()}]
}