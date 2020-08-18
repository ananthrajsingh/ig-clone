import {compose, mount, redirect, route, withView} from "navi";
import {View} from "react-navi";
import React from 'react'
import Dashboard from "../components/Dashboard/Dashboard";
import FeedBoard from "../components/FeedBoard/FeedBoard";
import Explore from "../components/Explore/Explore";


export default compose(
    withView(request => {
            return <Dashboard>
                <View/>
            </Dashboard>
        }
    ),

    mount({
        "/": redirect("/feed"),
        "/feed": route({
            view: <FeedBoard/>,
        }),
        "/explore": route({
            view: <Explore/>,
        }),
    })
);

