import React from 'react';
import './Sidebar.scss';
import { GlobalProps } from '../app/App';



interface SidebarProps extends GlobalProps {

}



const Sidebar: React.FC<SidebarProps> = (props) => (
  <div className={`${props?.className} Sidebar`}>
      Sidebar Component
  </div>
);

export default Sidebar;
