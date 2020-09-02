import placeholder2 from '../../images/placeholder_2.png'
import placeholder3 from '../../images/placeholder_3.png'
import {User} from "../../model/User";

export function getDummyStories(user: User): string[] {
    const storyList: string[] = []
    storyList.push(...[
        placeholder2,
        placeholder3
    ])
    return storyList
}