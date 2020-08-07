import React from 'react'
import './ProfileInfo.scss'
import { GlobalProps } from "../app/App";
import loop from '../../images/gradient-loop.svg'
import placeholder_dp from '../../images/placeholder-dp.png'

interface ProfileInfoProps extends GlobalProps {
    displayName: string
    username: string
}

const ProfileInfo: React.FC<ProfileInfoProps> = props => {
    // TODO Get avatar from props and replace placeholder
    let displayName = props.displayName
    let username = props.username

    return <div className={`${props?.className} bg-gray-dark align-center`}>
        <div className={'flex relative h-24 sm:invisible w-full justify-center'}  >
            <img src={loop} alt={'ring'}
                 className={'h-full w-auto'}/>
            <div
                className={'Avatar absolute rounded-full h-full w-24 sm:w-24 p-2'}>
            </div>
        </div>
        <div className={'flex flex-col w-full h-auto items-center mt-6 '}>
            <p className={'text-xl font-bold block'}>
                {displayName}
            </p>
            <p className={'text-base text-gray-text mt-1'}>
                {username}
            </p>
        </div>

        <div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    </div>
}

export default ProfileInfo


/*
 <div className={'flex relative h-24 sm:h-12 w-full justify-center'} >
            <img src={loop} alt={'ring'}
                 className={'h-full w-auto'}/>
            <img src={placeholder_dp} alt={'avatar'}
                 className={'absolute rounded-full h-full w-24 p-2 max-w-24 min-w-24 overflow-x-hidden'}/>
        </div>
 */
