import placeholder2 from '../../../public/assets/images/others/placeholder_2.png'
import placeholder3 from '../../../public/assets/images/others/placeholder_3.png'
import { UserModel } from "../../models/user.model";

export function getDummyStories(user: UserModel): string[] {
    const storyList: string[] = []
    storyList.push(...[
        placeholder2,
        placeholder3
    ])
    return storyList
}
