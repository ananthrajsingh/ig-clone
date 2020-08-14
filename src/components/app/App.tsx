import React from 'react';
import './App.scss';
import Sidebar from '../Sidebar/Sidebar';
import FeedBoard from '../FeedBoard/FeedBoard';
import { Grommet } from 'grommet';
import { deepFreeze } from 'grommet/utils';
import Dashboard from '../Dashboard/Dashboard';



export interface GlobalProps {
    className?: string // so that className can be passed from all parent to child even if props is empty, not mandatory
}



export const customTheme = deepFreeze(
  {
      'global': {
          'colors': {
              'brand': '#e2336b',
              'focus': 'none',
              'selected': '#e2336b',
              'accent-1': '#e2336b',
              'accent-2': '#fcac46'
          },
          font: {
              family: 'Nunito',
              size: '12px',
              height: '20px',
          },
      },
      'formField': {
          'border': {
              'color': 'none'
          }
      }
  }
);


function App() {
    return (
      <Grommet theme={customTheme}>
          <div
            className="box-border w-screen h-screen flex flex-row justify-start items-center text-white bg-gray-dark">
              <Sidebar className={'h-full max-w-3/10 w-3/10 min-w-xs'}></Sidebar>
              <Dashboard />
          </div>
      </Grommet>
    );
}


export default App;
