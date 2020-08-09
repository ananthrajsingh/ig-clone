import React from 'react';
import './Sidebar.scss';
import { GlobalProps } from '../app/App';
import logo from '../../images/logo.svg'
import logotext from '../../images/logo-text.svg'
import feed_normal from '../../images/feed_normal.svg'
import feed_selected from '../../images/feed_selected.svg'
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import NavItem from "../NavItem/NavItem";



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
      <div>
            <NavItem
                clickUrl={""}
                title={""}
                count={0}
                selectedIcon={feed_selected}
                normalIcon={feed_normal}
                isSelected={true} />
      </div>
  </div>
);

export default Sidebar;
