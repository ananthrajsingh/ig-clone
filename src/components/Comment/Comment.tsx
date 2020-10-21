import React from "react";
import {GlobalProps} from "../app/App";
import Avatar, {AvatarSize} from "../Avatar/Avatar";
import {UserModel} from "../../models/user.model";

interface CommentProps extends GlobalProps {
    user: UserModel
}

const Comment: React.FC<CommentProps> = (props: CommentProps) => {

    return <div
        className={"ml-2 mt-2 flex flex-row"}
    >

        <Avatar
            user={props.user}
            size={AvatarSize.xs}
            // TODO How to decide here whether we need to show ring or not
            showRing={true}/>

            <div
                className={"flex flex-row"}
            >
                <p
                    className={"text-base text-white font-bold align-start mt-1 ml-2"}
                >
                    john_doe
                </p>
            </div>
    </div>
}

export default Comment