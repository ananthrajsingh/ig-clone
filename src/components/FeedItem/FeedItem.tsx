import React from "react";
import "./FeedItem.scss";
import { GlobalProps } from "../app/App";
import { PostModel } from "../../models/post.model";
import Avatar, { AvatarSize } from "../Avatar/Avatar";
import { LoggedInUserManager } from "../../managers/logged-in-user.manager";
import { LoggedInUserStore } from "../../store/logged-in-user/logged-in-user.store";
import { UserModel } from "../../models/user.model";
import { useObservable } from "rxjs-hooks";



interface FeedItemProps extends GlobalProps {
    feedItem: PostModel
}



const FeedItem: React.FC<FeedItemProps> = (props: FeedItemProps) => {
    const loggedInUserManager = new LoggedInUserManager(LoggedInUserStore.getInstance());
    const loggedInUser: UserModel | null = useObservable(() => {
        return loggedInUserManager.getLoggedInUser();
    });
    return <div
      className={"w-100 flex flex-col justify-start items-center feed-item-wrapper space-x-5" + props.className}>
        <img src={props.feedItem.url} className={"feed-image"} alt={props.feedItem.caption}/>
        <span className={"w-full flex flex-row justify-between items-between pt-2"}>
              <span className={"flex flex-row justify-start items-center space-x-2"}>
                  <Avatar user={props?.feedItem?.creator} showRing={true} size={AvatarSize.xs}></Avatar>
                  <p className={"text-sm"}>{props.feedItem.creator?.username}</p>
              </span>
              <span className={"flex flex-row justify-start items-center space-x-1"}>
                  {props.feedItem.likes?.find(v => v.user_id === loggedInUser?.id) ?
                    <img className={"h-3 w-3"} src={"./assets/images/icons/heart_red.png"}/>
                    : <img className={"h-3 w-3"} src={"./assets/images/icons/heart.png"}/>}
                  <p className={"pr-4"}>{props.feedItem.likes?.length}</p>
                  <img className={"h-3 w-3"} src={"./assets/images/icons/comment.png"}/>
                  <p>{props.feedItem.comments.length}</p>
                  <p></p>
              </span>
      </span>
    </div>;
};

export default FeedItem;
