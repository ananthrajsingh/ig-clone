import React from "react";
import {GlobalProps} from "../app/App";
import {UserModel} from "../../models/user.model";


interface ProfileProps extends GlobalProps {
    user: UserModel
    postCount?: number
    followerCount?: number
    followingCount?: number
}

const Profile: React.FC<ProfileProps> = props => {
    return <div>
        <div className={'flex flex-row'}>


        </div>
    </div>
}

export default Profile