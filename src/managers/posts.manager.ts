import { combineLatest, Observable, Subject } from "rxjs";
import { PostsStore } from "../store/posts/posts.store";
import { PostModel } from "../models/post.model";
import { postsQuery } from "../store/posts/posts.query";
import { debounceTime, filter, switchMap } from "rxjs/operators";
import { fetchUserPosts } from "../services/posts.service";
import { UserManager } from "./user.manager";
import { UsersStore } from "../store/users/users.store";
import { fetchUserFeed } from "../services/feed.service";
import { UserModel } from "../models/user.model";



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


    getPost(postId: number, force = false): Observable<PostModel | undefined> {
        return postsQuery.selectEntity(postId);
    }


    getFeedOfUser(userId = 1, force = false): Observable<PostModel[]> {
        const $userFeed = new Subject<PostModel[]>();
        const usersManager = new UserManager(UsersStore.getInstance());

        if (force || (!postsQuery.getValue().user_feed[userId]?.isLoading && !postsQuery.getValue().user_feed[userId]?.isLoaded)) {
            fetchUserFeed(userId);
            this.store.update(state => { // set in store that we are loading data now.
                return {
                    ...state,
                    user_feed: {...state.user_feed, [userId]: {isLoading: true, isLoaded: false}}
                };
            });
        }
        combineLatest([usersManager.getFollowers(userId), postsQuery.select(`user_feed`), postsQuery.select([`user_posts`]), postsQuery.selectAll()])
          .pipe(filter(val => val[1][userId].isLoaded && !val[1][userId].isLoading), debounceTime(1000))
          .subscribe((k: any[]) => {
              const flatUsers: any = {};
              const flatPosts: any = {};
              const allPosts: PostModel[] = [];
              k[0].forEach((following: UserModel) => {
                  flatUsers[following.id] = following;
              });
              k[3].forEach((post: PostModel) => {
                  flatPosts[post.id] = post;
              });
              for (const followingId in flatUsers) {
                  const userPosts = k[2]?.["user_posts"]?.[followingId]?.["postIds"];
                  if (!userPosts) {
                      continue;
                  }
                  for (const postId of userPosts) {
                      const post: PostModel = {...flatPosts[postId]};
                      post.creator = flatUsers[post.creator_id];
                      allPosts.push(post);
                  }
              }
              $userFeed.next(allPosts);
          });
        return $userFeed;
    }

}
