import feed_selected from '../../images/feed_selected.svg';
import feed_normal from '../../images/feed_normal.svg';
import explore_normal from '../../images/search_normal.svg';
import explore_selected from '../../images/search_selected.svg';



export enum NavigationItemType {
    FEED,
    EXPLORE,
    NOTIFICATIONS,
    DIRECT,
    IGTV,
    STATS,
    SETTINGS
}



export interface NavigationItem {
    id: NavigationItemType,
    title: string,
    count?: number,
    urlEndpoint: string,
    selectedIcon: string,
    normalIcon: string
}



export function getNavItems(): NavigationItem[] {
    const itemList: NavigationItem[] = [];
    itemList.push(...[
        {
            id: NavigationItemType.FEED,
            title: 'Feed',
            urlEndpoint: 'feed',
            count: 10,
            selectedIcon: feed_selected,
            normalIcon: feed_normal
        },
        {
            id: NavigationItemType.EXPLORE,
            title: 'Explore',
            urlEndpoint: 'explore',
            selectedIcon: explore_selected,
            count: -1,
            normalIcon: explore_normal
        }
    ]);

    // TODO add like this for all the items.
    return itemList;

}
