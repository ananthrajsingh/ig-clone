import React from "react"
import {GlobalProps} from "../app/App";
import {Layer} from "grommet";
import {PostModel} from "../../models/post.model";

interface ExpandedFeedItemProps extends GlobalProps {
    // TODO Should not be optional
    post?: PostModel
}

const ExpandedFeedItem: React.FC<ExpandedFeedItemProps> = (props: ExpandedFeedItemProps) => {
    return <div>
        <Layer
            className={'flex flex-row justify-center w-full h-full bg-black absolute bg-opacity-96'}>
            <img
                className={'w-1/4 mt-auto mb-auto absolute mr-0 relative rounded-xxl z-50'}
                src={"assets/images/others/square_placeholder.png"}
                alt={props.post?.id + ""}
            />
            {/*<Layer*/}
            {/*    className={'w-1/4 h-full bg-gray-normal m-auto relative rounded-lg bg-opacity-100'}*/}
            {/*>*/}

            {/*</Layer>*/}
            <div
                className={'w-1/4 h-full bg-gray-normal relative rounded-xxl bg-opacity-100'}
            >

            </div>
        </Layer>
    </div>
}

export default ExpandedFeedItem