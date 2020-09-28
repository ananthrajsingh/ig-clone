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
        <Layer>
            className={'w-full h-full bg-black absolute z-50 bg-opacity-90'}
            <img
                className={'m-auto'}
                src={"assets/images/others/square_placeholder.png"}
                alt={props.post?.id + ""}
            />
        </Layer>
    </div>
}

export default ExpandedFeedItem