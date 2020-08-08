import React from 'react';
import './Dashboard.scss';
import { GlobalProps } from '../app/App';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import StoryList from '../StoryList/StoryList';



interface DashboardProps extends GlobalProps {

}



const Dashboard: React.FC<DashboardProps> = (props) => (
    <div
      className={'bg-gray-normal h-full w-full pt-12 px-16 rounded-l-lg flex flex-col justify-start items-center space-y-10 children:w-full overflow-hidden'}>
        <DashboardHeader/>
        <StoryList/>
    </div>
  )
;

export default Dashboard;
