import React from "react";
import { GlobalProps } from "../app/App";
import { StoryItemModel } from "../../models/ui/story-item.model";



interface StoryProps extends GlobalProps {
    stories: StoryItemModel[]
}



const Story: React.FC<StoryProps> = (props: StoryProps) => {
    return <div>
        <img
          src={props.stories[0].url}
          alt={"story_media"}
        />
    </div>;
};
export default Story;
