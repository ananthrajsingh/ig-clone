import { Observable } from "rxjs";
import { PostsStore } from "../store/posts/posts.store";
import { PostModel } from "../models/post.model";
import { postsQuery } from "../store/posts/posts.query";
import { filter, switchMap } from "rxjs/operators";
import { fetchUserPosts } from "../services/posts.service";



export class PostsManager {


    constructor(private store: PostsStore) {
    }


    getPostsOfUser(userId = 1, force = false): Observable<PostModel[]> {
        if (force || (!postsQuery.getValue().user_posts[userId]?.isLoading && !postsQuery.getValue().user_posts[userId]?.isLoaded)) {
            fetchUserPosts(userId);
            this.store.update(state => { // set in store that we are loading data now.
                return {
                    ...state,
                    user_posts: {...state.user_posts, [userId]: {postIds: [], isLoading: true, isLoaded: false}}
                };
            });
        }
        return postsQuery.select([`user_posts`])
          .pipe(filter((val: any) => {
              const obj = val?.["user_posts"]?.[userId];
              return !obj?.isLoading && obj?.isLoaded;
          }), switchMap(((data: any) => {
              return postsQuery.selectMany(data?.["user_posts"]?.[userId].postIds);
          })));
    }

}
