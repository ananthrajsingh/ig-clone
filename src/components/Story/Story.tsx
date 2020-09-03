import React from 'react'
import {GlobalProps} from "../app/App";
import {StoryItem} from "../../model/StoryItem";

interface StoryProps extends GlobalProps {
    stories: StoryItem[]
}

const Story: React.FC<StoryProps> = (props: StoryProps) => {
    return <div>
        <img
            src={props.stories[0].url}
            alt={'story_media'}
        />
    </div>
}
export default Story