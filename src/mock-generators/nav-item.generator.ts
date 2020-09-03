import { NavigationItem, NavigationItemType } from "../models/ui/navigation-item.model";


export function getNavItems(): NavigationItem[] {
    const itemList: NavigationItem[] = [];
    itemList.push(...[
        {
            id: NavigationItemType.FEED,
            title: "Feed",
            urlEndpoint: "feed",
            count: 10,
            selectedIcon: 'assets/images/icons/feed_selected.svg',
            normalIcon: 'assets/images/icons/feed_normal.svg'
        },
        {
            id: NavigationItemType.EXPLORE,
            title: "Explore",
            urlEndpoint: "explore",
            selectedIcon: 'assets/images/icons/search_selected.svg',
            count: -1,
            normalIcon: 'assets/images/icons/search_normal.svg'
        }
    ]);

    // TODO add like this for all the items.
    return itemList;

}
