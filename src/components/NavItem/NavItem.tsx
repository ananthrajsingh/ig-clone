import React, { useState } from 'react'
import './NavItem.scss'
import { GlobalProps } from '../app/App'
import highlighter from "../../images/item_selection_highlighter.svg"


interface NavItemProps extends GlobalProps {
    clickUrl: string
    title: string
    count: number
    selectedIcon: string
    normalIcon: string
    isSelected: boolean
}
const NavItem: React.FC<NavItemProps> = (props: any) => {

    let [isItemSelected, setIsItemSelected] = useState(props.isSelected)

    function toggleSelectedState() {
        setIsItemSelected(!isItemSelected)
    }

    return <div className={'flex flex-row justify-between h-5 ml-4 mt-6'}>
        <img
            className={'h-5 w-5'}
            src={isItemSelected? props.selectedIcon : props.normalIcon}
            alt={props.title + ' icon'}
        />
        <p
            className={'text-base align-start flex-grow-3 ml-4'}
            style={{ fontWeight: (isItemSelected ? 'bold' : 'normal')}}
        >
            {props.title}
        </p>
        <p
            className={'text-base text-gray-text flex-grow-1'}
            style={{ display: (props.count === 0 ? 'none' : 'block')}}
        >
            {props.count}
        </p>
        <img
            className={''}
            style={{ display: (isItemSelected ? 'block' : 'none') }}
            src={highlighter}
            alt={'highlighter'}
        />
    </div>
}

export default NavItem