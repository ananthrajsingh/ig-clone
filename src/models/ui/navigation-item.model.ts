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
