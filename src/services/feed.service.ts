import { fromFetch } from "rxjs/fetch";
import { map } from "rxjs/operators";
import { PostModel } from "../models/post.model";
import { PostsStore } from "../store/posts/posts.store";


export function fetchUserFeed(userId: number) {
    fromFetch(`feed/${userId}`)
      .pipe(map(v => v.json()))
      .subscribe(async (val) => {
            const feed: { [userId: number]: PostModel[] } = (await val)?.data; // set in store after getting response
            console.log("FEED", feed);
            for (const uId in feed) {
                PostsStore.getInstance()
                  .add(feed[uId]);
                PostsStore.getInstance()
                  .update((state) => {
                      return {
                          ...state,
                          user_posts: {
                              ...state.user_posts,
                              [uId]: {
                                  isLoaded: true,
                                  isLoading: false,
                                  postIds: feed[uId].map(a => a.id)
                              }
                          },
                          user_feed: {...state.user_feed, [userId]: {isLoaded: true, isLoading: false}}
                      };
                  });
            }
        }
      );
}
