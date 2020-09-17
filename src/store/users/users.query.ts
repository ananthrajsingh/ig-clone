import { UsersStore, UserState } from "./users.store";
import { QueryEntity } from "@datorama/akita";



export class UsersQuery extends QueryEntity<UserState> {
    constructor(protected store: UsersStore) {
        super(store);
    }
}



export const usersQuery = new UsersQuery(UsersStore.getInstance());
