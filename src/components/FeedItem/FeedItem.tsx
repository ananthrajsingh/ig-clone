import React from "react";
import "./FeedItem.scss";
import { GlobalProps } from "../app/App";
import { FeedItemModel } from "../../models/ui/feed-item.model";


interface FeedItemProps extends GlobalProps {
    feedItem: FeedItemModel
}



const FeedItem: React.FC<FeedItemProps> = (props) => (
  <div className={"w-100 flex flex-col justify-start items-center max-h-md feed-item-wrapper " + props.className}>
          <img src={props.feedItem.src} className={"feed-image"}/>
  </div>
);

export default FeedItem;
