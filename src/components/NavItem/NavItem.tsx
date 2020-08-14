import React from 'react';
import './NavItem.scss';
import { GlobalProps } from '../app/App';
import highlighter from '../../images/item_selection_highlighter.svg';
import { NavigationItem } from '../Sidebar/nav-items-helper';
import { isNaturalNumber } from '../../utils/number-helpers';
import { If } from 'react-extras';



interface NavItemProps extends GlobalProps {
    item: NavigationItem,
    onClick: (id: NavigationItem) => void
    isSelected: boolean
}



const NavItem: React.FC<NavItemProps> = (props: NavItemProps) => {

    function visibleIfSelected(isSelected: boolean) {
        return isSelected ? 'visible' : 'invisible';
    }


    function boldIfSelected(isSelected: boolean) {
        return isSelected ? 'font-bold' : 'font-normal';
    }


    return <div
      className={'flex flex-row justify-evenly h-5 ml-4 mt-6 cursor-pointer'}
      onClick={() => {
          props.onClick(props.item);
      }}
    >
        <img
          className={'h-5 w-5'}
          src={props.isSelected ? props.item.selectedIcon : props.item.normalIcon}
          alt={props.item.title + ' icon'}
        />
        <p
          className={'text-base align-start flex-grow-3 flex-none ml-4 ' + boldIfSelected(props.isSelected)}
        >
            {props.item.title}
        </p>
        <If condition={isNaturalNumber(props.item.count)}>
            <p className={'text-base text-gray-text flex-initial mr-8'}>
                {props.item.count}
            </p>
        </If>
        <img
          className={visibleIfSelected(props.isSelected)}
          src={highlighter}
          alt={'highlighter'}
        />
    </div>;
};

export default NavItem;
