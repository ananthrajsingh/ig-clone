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
import ExpandedFeedItem from "../ExpandedFeedItem/ExpandedFeedItem";
import {If} from "react-extras";
import {getRandomPostModel} from "../../mock-generators/feed.generator";

const FeedList: React.FC = () => {

    function onFeedItemClick(post: PostModel) {

    }

    function shuffle(a: any[]) {
        if (!a?.length) {
            return a;
        }
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }


    const loggedInUserManager = new LoggedInUserManager(LoggedInUserStore.getInstance());
    const postsManager = new PostsManager(PostsStore.getInstance());
    const feeds: PostModel[] = useObservable(() => {
        return loggedInUserManager.getLoggedInUser()
          .pipe(switchMap((loggedInUser: UserModel) => {
              return postsManager.getFeedOfUser(loggedInUser.id);
          }));
    }) as PostModel[];
    useEffect(() => {
    }, [feeds]);

    return <div className="feed-list w-100 overflow-y-auto">
        <Masonry
          breakpointCols={3}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
            {shuffle(feeds)
              ?.map((feed, index) => {
                  return <FeedItem
                      onClick={(feed) => onFeedItemClick(feed)}
                      feedItem={feed}
                      key={index}
                  />;
              })}
        </Masonry>
        <If condition={true}>
            <ExpandedFeedItem
                post={getRandomPostModel()}
            />
        </If>
    </div>;
};

export default FeedList;
