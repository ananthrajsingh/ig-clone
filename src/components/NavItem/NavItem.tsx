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

    return <div className={'flex flex-row'}>
        <img
            src={isItemSelected? props.selectedIcon : props.normalIcon}
            alt={props.title + ' icon'}
        />
        <p className={''}>
            {props.title}
        </p>
        <p style={{ display: (props.count === 0 ? 'none' : 'block') }}>
            {props.count}
        </p>
        <img
            style={{ display: (isItemSelected ? 'block' : 'none') }}
            src={highlighter}
            alt={'highlighter'}
        />
    </div>
}

export default NavItem