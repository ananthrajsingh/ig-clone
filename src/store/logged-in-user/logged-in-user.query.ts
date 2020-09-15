import { LoggedInUserState, LoggedInUserStore } from "./logged-in-user.store";
import { Query } from "@datorama/akita";



export class LoggedInUserQuery extends Query<LoggedInUserState> {
    constructor(protected store: LoggedInUserStore) {
        super(store);
    }
}



export const loggedInUserQuery = new LoggedInUserQuery(LoggedInUserStore.getInstance());
