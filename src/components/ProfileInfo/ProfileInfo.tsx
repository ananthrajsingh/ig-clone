import React from 'react'
import './ProfileInfo.scss'
import { GlobalProps } from "../app/App";
import loop from '../../images/gradient-loop.svg'
import placeholder_dp from '../../images/placeholder-dp.png'

interface ProfileInfoProps extends GlobalProps {

}

const ProfileInfo: React.FC<ProfileInfoProps> = props => {
    return <div className={`${props?.className} bg-gray-dark align-center`}>
        <div className={'flex relative h-24 sm:invisible w-full justify-center'}  >
            <img src={loop} alt={'ring'}
                 className={'h-full w-auto'}/>
            <div className={'Avatar absolute rounded-full h-full w-24 sm:w-24 p-2'}>
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
