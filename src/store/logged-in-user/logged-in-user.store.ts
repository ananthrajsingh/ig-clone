import { Store, StoreConfig } from "@datorama/akita";
import { UserModel } from "../../models/user.model";



export interface LoggedInUserState {
    user: UserModel | null
    isLoaded: boolean,
    isLoading: boolean
}



export function createInitialState(): LoggedInUserState {
    return {user: null, isLoaded: false, isLoading: false};
}



@StoreConfig({name: "loggedInUser"})
export class LoggedInUserStore extends Store<LoggedInUserState> {
    private static instance: LoggedInUserStore;


    constructor() {
        super(createInitialState());
    }


    static getInstance(): LoggedInUserStore {
        if (!LoggedInUserStore.instance) {
            LoggedInUserStore.instance = new LoggedInUserStore();
        }
        return LoggedInUserStore.instance;
    };

}
