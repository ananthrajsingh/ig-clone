import Pretender from "pretender";
import { userRoutes } from "./users.mock";
import { postsMocks } from "./posts.mock";

const server = new Pretender();

userRoutes(server);
postsMocks(server);


export function getFormattedResponse(data: any): any { //helper to get formatted response.
    return [200, {"Content-Type": "application/json"}, JSON.stringify({data})];
}
