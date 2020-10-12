import React from "react";
import "./FeedItemDetail.scss";
import { GlobalProps } from "../app/App";
import { useObservable } from "rxjs-hooks";
import { PostsManager } from "../../managers/posts.manager";
import { PostsStore } from "../../store/posts/posts.store";
import { PostModel } from "../../models/post.model";
import FeedList from "../FeedList/FeedList";



interface FeedItemDetailProps extends GlobalProps {
    postId: number
}



const FeedItemDetail: React.FC<FeedItemDetailProps> = (props: FeedItemDetailProps) => {
    const postsManager = new PostsManager(PostsStore.getInstance());

    const post : PostModel | undefined | null = useObservable(() => {
        return postsManager.getPost(props.postId);
    });

    return <div className="flex-row flex items-start justify-start rounded">
        <img src={post?.url} className={'h-70-screen rounded img-spaces'}></img>
        <div className={'h-full detail-data rounded'}>Cool stuff goes here</div>
    </div>;
};

export default FeedItemDetail;
