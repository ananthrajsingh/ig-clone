import { UserModel } from "../models/user.model";
import { MediaType, StoryItemModel } from "../models/ui/story-item.model";


export function getDummyStoryItemArray(user: UserModel): StoryItemModel[] {
    return [
        {url: 'assets/images/others/placeholder_2.png', type: MediaType.IMAGE, seen: false, created_at: Date.now()},
        {url: 'assets/images/others/placeholder_3.png', type: MediaType.IMAGE, seen: false, created_at: Date.now() + 1},
        {url: 'assets/images/others/placeholder_2.png', type: MediaType.IMAGE, seen: false, created_at: Date.now() + 2},
    ];
}
