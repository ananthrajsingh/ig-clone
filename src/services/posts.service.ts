import { fromFetch } from "rxjs/fetch";
import { map } from "rxjs/operators";
import { PostsStore } from "../store/posts/posts.store";
import { PostModel } from "../models/post.model";


export function fetchUserPosts(userId: number) {
    fromFetch(`posts/${userId}`)
      .pipe(map(v => v.json()))
      .subscribe(async (val) => {
            const posts: PostModel[] = (await val)?.data; // set in store after getting response
            PostsStore.getInstance()
              .add(posts);
            PostsStore.getInstance()
              .update((state) => {
                  return {
                      ...state,
                      user_posts: {
                          ...state.user_posts,
                          [userId]: {isLoaded: true, isLoading: false, postIds: posts.map(a => a.id)}
                      }
                  };
              });
        }
      );
}
