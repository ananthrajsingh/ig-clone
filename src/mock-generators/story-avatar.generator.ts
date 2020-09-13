import {AvatarProps, AvatarSize} from "../components/Avatar/Avatar";
import {getDummyUser} from "./user.generator";

export function getDummyStoryAvatars(redundantId: string): AvatarProps[] {
    return [
        {user: getDummyUser(), showRing: true, size: AvatarSize.sm},
        {user: getDummyUser(), showRing: true, size: AvatarSize.sm},
        {user: getDummyUser(), showRing: true, size: AvatarSize.sm},
        {user: getDummyUser(), showRing: true, size: AvatarSize.sm},
        {user: getDummyUser(), showRing: true, size: AvatarSize.sm},
        {user: getDummyUser(), showRing: true, size: AvatarSize.sm},
        {user: getDummyUser(), showRing: true, size: AvatarSize.sm},
        {user: getDummyUser(), showRing: true, size: AvatarSize.sm},
        {user: getDummyUser(), showRing: true, size: AvatarSize.sm},
        {user: getDummyUser(), showRing: true, size: AvatarSize.sm},
        {user: getDummyUser(), showRing: true, size: AvatarSize.sm},
        {user: getDummyUser(), showRing: true, size: AvatarSize.sm},
        {user: getDummyUser(), showRing: true, size: AvatarSize.sm},
        {user: getDummyUser(), showRing: true, size: AvatarSize.sm},
        {user: getDummyUser(), showRing: true, size: AvatarSize.sm},
        {user: getDummyUser(), showRing: true, size: AvatarSize.sm},
        {user: getDummyUser(), showRing: true, size: AvatarSize.sm},
    ]
}