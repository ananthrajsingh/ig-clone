import React, { useEffect } from "react";
import "./FeedList.scss";
import FeedItem from "../FeedItem/FeedItem";
import Masonry from "react-masonry-css";
import { UserModel } from "../../models/user.model";
import { useObservable } from "rxjs-hooks";
import { LoggedInUserStore } from "../../store/logged-in-user/logged-in-user.store";
import { switchMap } from "rxjs/operators";
import { PostsManager } from "../../managers/posts.manager";
import { PostsStore } from "../../store/posts/posts.store";
import { PostModel } from "../../models/post.model";
import { LoggedInUserManager } from "../../managers/logged-in-user.manager";

const FeedList: React.FC = () => {
    const loggedInUserManager = new LoggedInUserManager(LoggedInUserStore.getInstance());
    const postsManager = new PostsManager(PostsStore.getInstance());
    const feeds: PostModel[] | null = useObservable(() => {
        return loggedInUserManager.getLoggedInUser()
          .pipe(switchMap((loggedInUser: UserModel) => {
              return postsManager.getFeedOfUser(loggedInUser.id);
          }));
    });
    useEffect(() => {
    }, [feeds]);
    return <div className="feed-list w-100 overflow-y-auto">
        <Masonry
          breakpointCols={3}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
            {feeds?.map((feed, index) => {
                return <FeedItem feedItem={feed} key={index}/>;
            })}
        </Masonry>
    </div>;
};

export default FeedList;
