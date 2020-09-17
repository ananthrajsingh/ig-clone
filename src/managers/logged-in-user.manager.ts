import { LoggedInUserStore } from "../store/logged-in-user/logged-in-user.store";
import { loggedInUserQuery } from "../store/logged-in-user/logged-in-user.query";
import { fetchLoggedInUser } from "../services/user.service";
import { Observable } from "rxjs";
import { filterNil } from "@datorama/akita";
import { UserModel } from "../models/user.model";



export class LoggedInUserManager {


    constructor(private store: LoggedInUserStore) {
    }


    getLoggedInUser(userId = 1, force = false): Observable<UserModel> {
        if (force || (!loggedInUserQuery.getValue().isLoading && !loggedInUserQuery.getValue().isLoaded)) {
            fetchLoggedInUser(userId);
            this.store.update(state => {
                return {...state, isLoaded: false, isLoading: true};
            });
        }
        return loggedInUserQuery.select("user")
          .pipe(filterNil);
    }
}
