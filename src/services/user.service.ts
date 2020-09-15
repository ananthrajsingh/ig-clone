import { fromFetch } from "rxjs/fetch";
import { LoggedInUserStore } from "../store/logged-in-user/logged-in-user.store";
import { map } from "rxjs/operators";


export function fetchLoggedInUser(userId: number) {
    console.log("CALLED fetchLoggedInUser");
    fromFetch(`user/${userId}`)
      .pipe(map(v => v.json()))
      .subscribe(async (val) => {
            const user = await val;
            LoggedInUserStore.getInstance()
              .update((state) => {
                  return {...state, user: user.data, isLoading: true, isLoaded: false};
              });
        }
      );
}
