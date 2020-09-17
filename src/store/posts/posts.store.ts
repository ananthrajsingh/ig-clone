import { EntityState, EntityStore, StoreConfig } from "@datorama/akita";
import { PostModel } from "../../models/post.model";



export interface PostsState extends EntityState<PostModel> {
    user_posts: { [userId: number]: { postIds: number[], isLoaded: boolean, isLoading: boolean } }
    user_feed: { [userId: number]: { isLoaded: boolean, isLoading: boolean } }
}



export function createInitialState(): PostsState {
    return {user_posts: {}, user_feed: {}};
}



@StoreConfig({name: "posts"})
export class PostsStore extends EntityStore<PostsState> {
    private static instance: PostsStore;


    constructor() {
        super(createInitialState());
    }


    static getInstance(): PostsStore {
        if (!PostsStore.instance) {
            PostsStore.instance = new PostsStore();
        }
        return PostsStore.instance;
    };

}
