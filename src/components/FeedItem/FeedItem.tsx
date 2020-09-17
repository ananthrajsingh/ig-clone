import React from "react";
import "./FeedItem.scss";
import { GlobalProps } from "../app/App";
import { FeedItemModel } from "../../models/ui/feed-item.model";
import { PostModel } from "../../models/post.model";


interface FeedItemProps extends GlobalProps {
    feedItem: PostModel
}



const FeedItem: React.FC<FeedItemProps> = (props) => (
  <div className={"w-100 flex flex-col justify-start items-center max-h-md feed-item-wrapper " + props.className}>
          <img src={props.feedItem.url} className={"feed-image"} alt={props.feedItem.caption}/>
  </div>
);

export default FeedItem;
