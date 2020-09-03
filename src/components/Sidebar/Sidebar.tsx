import React, { useEffect, useState } from "react";
import "./Sidebar.scss";
import { GlobalProps } from "../app/App";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import { For } from "react-extras";
import NavItem from "../NavItem/NavItem";
import { useNavigation } from "react-navi";
import { getNavItems } from "../../mock-generators/nav-item.generator";
import { NavigationItem, NavigationItemType } from "../../models/ui/navigation-item.model";



interface SidebarProps extends GlobalProps {

}



const Sidebar: React.FC<SidebarProps> = (props) => {
    let [selectedItem, setSelectedItem] = useState(NavigationItemType.FEED);
    let [navItems, setNavItems] = useState<NavigationItem[]>([]);
    let navigator = useNavigation();
    useEffect(() => {
        setNavItems(getNavItems());
        console.log("CALLED");
    }, []);


    async function onItemClick(item: NavigationItem) {
        setSelectedItem(item.id);
        navigator.navigate(item.urlEndpoint);
    }


    function isSelected(id: NavigationItemType) {
        return id === selectedItem;
    }


    return <div className={`${props?.className} Sidebar bg-gray-dark`}>
        <div className={"mt-2"}>
            <img src={"/assets/images/logos/logo.svg"} alt={"Instagram Logo"}
                 className={"w-8 ml-4 sm:mt-1 sm:ml-2 inline"}/>
            <img src={"/assets/images/logos/logo-text.svg"} alt={"Instagram Logo Text"}
                 className={"sm:invisible w-32 ml-2 mt-2 inline"}/>
        </div>
        <ProfileInfo
          className={"mt-8"}
          name={"John Doe"}
          username={"@johndoe"}
          followerCount={2000}
          followingCount={67687976}
          postCount={23}
        />
        <div className={"mt-8"}>
            <For of={navItems} render={(item: NavigationItem, index) => {
                return <NavItem
                  key={index}
                  onClick={onItemClick}
                  item={item}
                  isSelected={isSelected(item.id)}/>;
            }}/>
        </div>
    </div>;
};

export default Sidebar;
