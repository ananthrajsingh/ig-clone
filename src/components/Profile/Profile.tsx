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
        <div
            className={'flex flex-row h-screen w-full overflow-hidden items-center children:h-full space-y-10 pt-12 px-8'}>
            <div>
                <p className={'text-2xl font-bold mb-8'}>
                    POSTS
                </p>
                <div
                    className={'h-screen w-full overflow-hidden children:h-full'}
                >
                    <FeedList/>
                </div>
            </div>
            <div
                className={'ml-8 flex flex-col'}
            >
                <ProfileInfo
                    user={props.user}
                    postCount={props.postCount}
                    followerCount={props.followerCount}
                    followingCount={props.followingCount}
                />
                <p
                    className={'mt-4'}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                </p>
            </div>
        </div>
    </div>
}

export default Profile