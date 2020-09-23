import React from "react";
import {GlobalProps} from "../app/App";
import {UserModel} from "../../models/user.model";
import FeedList from "../FeedList/FeedList";
import ProfileInfo from "../ProfileInfo/ProfileInfo";


interface ProfileProps extends GlobalProps {
    user: UserModel
    postCount?: number
    followerCount?: number
    followingCount?: number
}

const Profile: React.FC<ProfileProps> = (props: ProfileProps) => {
    return <div>
        <div className={'flex flex-row h-screen w-full overflow-hidden items-center children:h-full space-y-10 pt-12 px-8'}>
        <FeedList
        />
        <ProfileInfo
            className={'ml-8'}
            user={props.user}
            postCount={props.postCount}
            followerCount={props.followerCount}
            followingCount={props.followingCount}
        />

        </div>
    </div>
}

export default Profile