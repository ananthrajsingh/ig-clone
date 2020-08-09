import React from 'react';
import './Sidebar.scss';
import { GlobalProps } from '../app/App';
import ProfileInfo from "../ProfileInfo/ProfileInfo";



interface SidebarProps extends GlobalProps {

}

const Sidebar: React.FC<SidebarProps> = (props) => (
  <div className={`${props?.className} Sidebar bg-gray-dark`}>
      <div className={'mt-2'}>
            <img src={'/assets/images/logo.svg'} alt={'Instagram Logo'} className={'w-8 ml-4 sm:mt-1 sm:ml-2 inline'}/>
            <img src={'/assets/images/logo-text.svg'} alt={'Instagram Logo Text'} className={'sm:invisible w-32 ml-2 mt-2 inline'}/>
      </div>
      <ProfileInfo
          className={'mt-8'}
          name={"John Doe"}
          username={'@ananthrajsingh'}
          followerCount={2000}
          followingCount={67687976}
          postCount={23}
      />
  </div>
);

export default Sidebar;
