import React from "react";
import "./Dashboard.scss";
import Sidebar from "../Sidebar/Sidebar";


const Dashboard: React.FC = (props) => {
    return <div
      className="box-border w-screen h-screen flex flex-row justify-start items-center text-white bg-gray-dark">
        <Sidebar className={"h-full max-w-1/4 w-1/4 min-w-1/4"}></Sidebar>
        {props.children || null}
    </div>;
};

export default Dashboard;
