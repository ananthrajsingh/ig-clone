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
                className={"flex flex-row flex-grow-3"}
            >
                <p className={"text-sm text-gray-light align-start mt-1 ml-4 mr-2"}>
                    <span className="text-sm text-white font-bold">john_doe</span> Nice photo there, I was also thinking of coming along
                </p>
            </div>

        <img
            className={""}
            src={"assets/images/icons/comment_like_red.svg"}
        />
    </div>
}

export default Comment