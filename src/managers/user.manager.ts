import { fetchFollowers, fetchFollowing } from "../services/user.service";
import { Observable } from "rxjs";
import { UserModel } from "../models/user.model";
import { usersQuery } from "../store/users/users.query";
import { filter, switchMap } from "rxjs/operators";
import { UsersStore } from "../store/users/users.store";



export class UserManager {


    constructor(private store: UsersStore) {
    }


    getFollowers(userId = 1, force = false): Observable<UserModel[]> {
        if (force || (!usersQuery.getValue().followers[userId]?.isLoading && !usersQuery.getValue().followers[userId]?.isLoaded)) {
            fetchFollowers(userId);
            UsersStore.getInstance()
              .update((state) => {
                  return {
                      ...state,
                      followers: {
                          ...state.followers,
                          [userId]: {followerIds: [], isLoading: true, isLoaded: false}
                      }
                  };
              });
        }
        return usersQuery.select([`followers`])
          .pipe(filter((val: any) => {
              const obj = val?.["followers"]?.[userId];
              return !obj?.isLoading && obj?.isLoaded;
          }), switchMap(((data: any) => {
              return usersQuery.selectMany(data?.["followers"]?.[userId].followerIds);
          })));
    }


    getFollowing(userId = 1, force = false): Observable<UserModel[]> {
        if (force || (!usersQuery.getValue().following[userId]?.isLoading && !usersQuery.getValue().following[userId]?.isLoaded)) {
            fetchFollowing(userId);
            UsersStore.getInstance()
              .update((state) => {
                  return {
                      ...state,
                      following: {
                          ...state.following,
                          [userId]: {followingIds: [], isLoading: true, isLoaded: false}
                      }
                  };
              });
        }
        return usersQuery.select([`following`])
          .pipe(filter((val: any) => {
              const obj = val?.["following"]?.[userId];
              return !obj?.isLoading && obj?.isLoaded;
          }), switchMap(((data: any) => {
              return usersQuery.selectMany(data?.["following"]?.[userId].followingIds);
          })));
    }

}
