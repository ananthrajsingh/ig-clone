import React from "react";
import { GlobalProps } from "../app/App";
import FeedBoardHeader from "../FeedHeader/FeedBoardHeader";
import StoryList from "../StoryList/StoryList";
import FeedList from "../FeedList/FeedList";



interface FeedBoardProps extends GlobalProps {

}



const FeedBoard: React.FC<FeedBoardProps> = (props) => {
    return <div
      className={"bg-gray-normal h-full w-full pt-12 px-16 rounded-l-lg flex flex-col justify-start items-center space-y-10 children:w-full overflow-hidden"}>
        <FeedBoardHeader/>
        <StoryList/>
        <FeedList/>
    </div>;
};


export default FeedBoard;
