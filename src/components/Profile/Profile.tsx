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
        <div className={'flex flex-row'}>
        <FeedList/>
        <ProfileInfo
            user={props.user}
            postCount={props.postCount}
            followerCount={props.followerCount}
            followingCount={props.followingCount}
        />

        </div>
    </div>
}

export default Profile