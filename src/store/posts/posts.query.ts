import { PostsState, PostsStore } from "./posts.store";
import { Query, QueryEntity } from "@datorama/akita";



export class PostsQuery extends QueryEntity<PostsState> {
    constructor(protected store: PostsStore) {
        super(store);
    }
}



export const postsQuery = new PostsQuery(PostsStore.getInstance());
