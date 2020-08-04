import React from 'react';
import './Dashboard.scss';
import { GlobalProps } from '../app/App';



interface DashboardProps extends GlobalProps {

}



const Dashboard: React.FC<DashboardProps> = (props) => (
  <div className={`${props?.className} Sidebar`}>
      Dashboard Component
  </div>
);

export default Dashboard;
