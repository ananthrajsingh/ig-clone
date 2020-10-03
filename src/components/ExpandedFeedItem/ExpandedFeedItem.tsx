import React from "react"
import {GlobalProps} from "../app/App";
import {Layer} from "grommet";
import {PostModel} from "../../models/post.model";
import Avatar, {AvatarSize} from "../Avatar/Avatar";

interface ExpandedFeedItemProps extends GlobalProps {
    // TODO Should not be optional
    post?: PostModel
}

const ExpandedFeedItem: React.FC<ExpandedFeedItemProps> = (props: ExpandedFeedItemProps) => {
    return <div>
        <Layer
            className={'flex flex-row justify-center w-full h-full bg-black absolute bg-opacity-96'}>
            <img
                className={'h-70-screen mt-auto mb-auto absolute mr-0 relative rounded-xxl z-50'}
                src={"assets/images/others/square_placeholder.png"}
                alt={props.post?.id + ""}
            />
            {/*flex flex-column items-stretch flex-wrap*/}
            <div
                className={'w-1/4 h-70-screen table mt-auto mb-auto ml-4 bg-gray-dark rounded-xxl bg-opacity-100'}
            >
                <div
                    className={'flex flex-row mt-4 ml-6 mr-6'}
                >
                    <Avatar
                        user={props.post?.creator}
                        // TODO(ASK) How to send from here whether to show ring?
                        showRing={false}
                        size={AvatarSize.xs}
                    />
                    <p
                        className={'text-base text-white font-bold align-start flex-grow-3 mt-1 ml-2'}
                    >
                        {props.post?.creator?.username}
                    </p>
                </div>

                <p
                    className={'text-base text-gray-light mx-6 mt-1'}
                >
                    {props.post?.caption}
                </p>
            </div>
        </Layer>
    </div>
}

export default ExpandedFeedItem