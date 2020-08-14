import React, { useState } from 'react'
import './NavItem.scss'
import { GlobalProps } from '../app/App'
import highlighter from "../../images/item_selection_highlighter.svg"
import { NavigationType } from '../Sidebar/Sidebar'


interface NavItemProps extends GlobalProps {
    id: NavigationType
    onClick: (id: NavigationType) => void
    count: number
    selectedIcon: string
    normalIcon: string
    isSelected: boolean
}
const NavItem: React.FC<NavItemProps> = (props: any) => {

    function visibleIfSelected(isSelected: boolean) {
        return isSelected ? 'visible' : 'invisible'
    }

    function visibleIfPositiveNumber(count: number) {
        if (count === null || count < 1) return 'hidden'
        return 'visible'
    }

    function boldIfSelected(isSelected: boolean) {
        return isSelected ? 'font-bold' : 'font-normal'
    }

    return <div
        className={'flex flex-row justify-evenly h-5 ml-4 mt-6 cursor-pointer'}
        onClick={() => {props.onClick(props.id)}}
    >
        <img
            className={'h-5 w-5'}
            src={props.isSelected? props.selectedIcon : props.normalIcon}
            alt={props.title + ' icon'}
        />
        <p
            className={'text-base align-start flex-grow-3 flex-none ml-4 ' + boldIfSelected(props.isSelected)}
        >
            {props.id}
        </p>
        <p
            className={'text-base text-gray-text flex-initial mr-8 ' + visibleIfPositiveNumber(props.count)}
        >
            {props.count}
        </p>
        <img
            className={visibleIfSelected(props.isSelected)}
            src={highlighter}
            alt={'highlighter'}
        />
    </div>
}

export default NavItem