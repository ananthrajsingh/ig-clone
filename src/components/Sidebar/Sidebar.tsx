import React, { useState } from "react";
import "./Sidebar.scss";
import { GlobalProps } from "../app/App";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import { For } from "react-extras";
import NavItem from "../NavItem/NavItem";
import { useNavigation } from "react-navi";
import { getNavItems } from "../../mock-generators/nav-item.generator";
import { NavigationItem, NavigationItemType } from "../../models/ui/navigation-item.model";
import { UserManager } from "../../managers/user.manager";
import { LoggedInUserStore } from "../../store/logged-in-user/logged-in-user.store";
import { UserModel } from "../../models/user.model";
import { useObservable } from "rxjs-hooks";
import { PostsManager } from "../../managers/posts.manager";
import { PostsStore } from "../../store/posts/posts.store";
import { PostModel } from "../../models/post.model";
import { switchMap } from "rxjs/operators";



interface SidebarProps extends GlobalProps {

}



const Sidebar: React.FC<SidebarProps> = (props) => {
    let [selectedItem, setSelectedItem] = useState(NavigationItemType.FEED);
    const usersManager = new UserManager(LoggedInUserStore.getInstance());
    let navigator = useNavigation();
    const loggedInUser: UserModel | null = useObservable(() => {
        return usersManager.getLoggedInUser();
    });
    const postsManager = new PostsManager(PostsStore.getInstance());
    const posts: PostModel[] | null = useObservable(() => {
        return usersManager.getLoggedInUser()
          .pipe(switchMap((loggedInUser: UserModel) => {
              console.log("SM", loggedInUser);
              return postsManager.getPostsOfUser(loggedInUser.id);
          }));
    });


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
        {loggedInUser ? <ProfileInfo
          className={"mt-8"}
          user={loggedInUser as UserModel}
          followerCount={2000}
          followingCount={67687976}
          postCount={posts?.length}
        /> : <></>}
        <div className={"mt-8"}>
            <For of={getNavItems()} render={(item: NavigationItem, index) => {
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
