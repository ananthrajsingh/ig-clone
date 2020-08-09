import React from 'react';
import './Sidebar.scss';
import { GlobalProps } from '../app/App';
import logo from '../../images/logo.svg'
import logotext from '../../images/logo-text.svg'
import feed_normal from '../../images/feed_normal.svg'
import feed_selected from '../../images/feed_selected.svg'
import explore_normal from '../../images/search_normal.svg'
import explore_selected from '../../images/search_selected.svg'
import notif_normal from '../../images/notification_normal.svg'
import notif_selected from '../../images/notification_selected.svg'
import direct_normal from '../../images/direct_normal.svg'
import direct_selected from '../../images/direct_selected.svg'
import tv_normal from '../../images/tv_normal.svg'
import tv_selected from '../../images/tv_selected.svg'
import stats_normal from '../../images/stats_normal.svg'
import stats_selected from '../../images/stats_selected.svg'
import settings_normal from '../../images/settings_normal.svg'
import settings_selected from '../../images/settings_selected.svg'
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
      <div className={'mt-8'}>
            <NavItem
                clickUrl={""}
                title={"Feed"}
                count={0}
                selectedIcon={feed_selected}
                normalIcon={feed_normal}
                isSelected={true} />
            <NavItem
                clickUrl={""}
                title={"Explore"}
                count={0}
                selectedIcon={explore_selected}
                normalIcon={explore_normal}
                isSelected={false} />
            <NavItem
                clickUrl={""}
                title={"Notification"}
                count={5}
                selectedIcon={notif_selected}
                normalIcon={notif_normal}
                isSelected={false} />
            <NavItem
                clickUrl={""}
                title={"Direct"}
                count={0}
                selectedIcon={direct_selected}
                normalIcon={direct_normal}
                isSelected={false} />
            <NavItem
                clickUrl={""}
                title={"IG TV"}
                count={0}
                selectedIcon={tv_selected}
                normalIcon={tv_normal}
                isSelected={false} />
            <NavItem
                clickUrl={""}
                title={"Statistics"}
                count={0}
                selectedIcon={stats_selected}
                normalIcon={stats_normal}
                isSelected={false} />
            <NavItem
                clickUrl={""}
                title={"Settings"}
                count={0}
                selectedIcon={settings_selected}
                normalIcon={settings_normal}
                isSelected={false} />
      </div>
  </div>
);

export default Sidebar;
