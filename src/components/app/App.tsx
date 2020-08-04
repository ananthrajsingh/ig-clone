import React from 'react';
import './App.scss';
import Sidebar from '../Sidebar/Sidebar';
import Dashboard from '../Dashboard/Dashboard';



export interface GlobalProps {
    className?: string // so that className can be passed from all parent to child even if props is empty, not mandatory
}



function App() {
    return (
      <div className="box-border w-screen h-screen flex flex-row justify-start items-center">
          <Sidebar></Sidebar>
          <Dashboard className={'w-full'}></Dashboard>
      </div>
    );
}


export default App;
