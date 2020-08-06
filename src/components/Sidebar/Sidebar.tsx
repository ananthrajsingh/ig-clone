import React from 'react';
import './Sidebar.scss';
import { GlobalProps } from '../app/App';
import logo from '../../images/logo.svg'
import logotext from '../../images/logo-text.svg'
import ProfileInfo from "../ProfileInfo/ProfileInfo";



interface SidebarProps extends GlobalProps {

}



const Sidebar: React.FC<SidebarProps> = (props) => (
  <div className={`${props?.className} Sidebar bg-gray-dark`}>
      <img src={logo} alt={'Instagram Logo'} className={'w-8 ml-4 sm:mt-1 sm:ml-2 inline'}/>
      <img src={logotext} alt={'Instagram Logo Text'} className={'sm:invisible w-32 ml-2 mt-2 inline'}/>
      <ProfileInfo />
  </div>
);

export default Sidebar;
