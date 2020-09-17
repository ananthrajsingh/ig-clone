import { fromFetch } from "rxjs/fetch";
import { LoggedInUserStore } from "../store/logged-in-user/logged-in-user.store";
import { map } from "rxjs/operators";
import { UsersStore } from "../store/users/users.store";
import { UserModel } from "../models/user.model";


export function fetchLoggedInUser(userId: number) {
    fromFetch(`user/${userId}`)
      .pipe(map(v => v.json()))
      .subscribe(async (val) => {
            const user = await val;
            LoggedInUserStore.getInstance()
              .update((state) => {
                  return {...state, user: user.data, isLoading: false, isLoaded: true};
              });
        }
      );
}


export function fetchFollowers(userId: number) {
    fromFetch(`followers/${userId}`)
      .pipe(map(v => v.json()))
      .subscribe(async (val) => {
            const users: UserModel[] = (await val).data;
            UsersStore.getInstance()
              .upsertMany(users);
            UsersStore.getInstance()
              .update((state) => {
                  return {
                      ...state,
                      followers: {
                          ...state.followers,
                          [userId]: {followerIds: users.map(k => k.id), isLoading: false, isLoaded: true}
                      }
                  };
              });
        }
      );
}


export function fetchFollowing(userId: number) {
    fromFetch(`following/${userId}`)
      .pipe(map(v => v.json()))
      .subscribe(async (val) => {
            const users: UserModel[] = (await val).data;
            UsersStore.getInstance()
              .upsertMany(users);
            UsersStore.getInstance()
              .update((state) => {
                  return {
                      ...state,
                      following: {
                          ...state.following,
                          [userId]: {followingIds: users.map(k => k.id), isLoading: false, isLoaded: true}
                      }
                  };
              });
        }
      );
}
