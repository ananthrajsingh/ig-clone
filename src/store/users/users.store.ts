import { EntityState, EntityStore, StoreConfig } from "@datorama/akita";
import { UserModel } from "../../models/user.model";



export interface UserState extends EntityState<UserModel> {
    followers: { [userId: number]: { followerIds: number[], isLoaded: boolean, isLoading: boolean } }
    following: { [userId: number]: { followingIds: number[], isLoaded: boolean, isLoading: boolean } }
}



export function createInitialState(): UserState {
    return {followers: {}, following: {}};
}



@StoreConfig({name: "users"})
export class UsersStore extends EntityStore<UserState> {
    private static instance: UsersStore;


    constructor() {
        super(createInitialState());
    }


    static getInstance(): UsersStore {
        if (!UsersStore.instance) {
            UsersStore.instance = new UsersStore();
        }
        return UsersStore.instance;
    };

}
