import React from 'react';
import './Sidebar.scss';
import { GlobalProps } from '../app/App';
import logo from '../../images/logo.svg'
import logotext from '../../images/logo-text.svg'
import ProfileInfo from "../ProfileInfo/ProfileInfo";



interface SidebarProps extends GlobalProps {

}


// TODO Send name and username from props to ProfileInfo
// TODO Send followers, following and posts from props to ProfileInfo
const Sidebar: React.FC<SidebarProps> = (props) => (
  <div className={`${props?.className} Sidebar bg-gray-dark`}>
      <div className={'mt-2'}>
            <img src={logo} alt={'Instagram Logo'} className={'w-8 ml-4 sm:mt-1 sm:ml-2 inline'}/>
            <img src={logotext} alt={'Instagram Logo Text'} className={'sm:invisible w-32 ml-2 mt-2 inline'}/>
      </div>
      <ProfileInfo
          className={'mt-8'}
          displayName={"Ananth Raj Singh"}
          username={'@ananthrajsingh'}
          followers={2000}
          following={67687976}
          posts={23}
      />
  </div>
);

export default Sidebar;
