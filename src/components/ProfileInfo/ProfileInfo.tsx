import React from 'react'
import './ProfileInfo.scss'
import { GlobalProps } from "../app/App";
import loop from '../../images/gradient-loop.svg'
import placeholder_dp from '../../images/placeholder-dp.png'

interface ProfileInfoProps extends GlobalProps {
    displayName: string
    username: string
    posts: number
    followers: number
    following: number

}

const ProfileInfo: React.FC<ProfileInfoProps> = props => {
    // TODO Get avatar from props and replace placeholder
    let displayName = props.displayName
    let username = props.username
    let posts = props.posts
    let followers = props.followers
    let following = props.following


    function formatNumber(value: number) {
        if (value < 0) return 0
        if (value < 1000) return value
        if (value >= 1000 && value < 1000000) return (value/1000).toFixed(1) + 'k';
        return (value/1000000).toFixed(1) + 'm'
    }

    return <div className={`${props?.className} bg-gray-dark align-center`}>
        <div className={'flex relative h-24 sm:invisible w-full justify-center'}>
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

        {/*Right margin is more than left as it gives better look due to fixed texts*/}
        <div className={'flex flex-row flex-no-wrap justify-evenly mt-6 mr-8 ml-6'}>
            <div className={'flex-1 justify-center flex flex-col items-center'}>
                <p className={'text-base'}>
                    {formatNumber(posts)}
                </p>
                <p className={'text-gray-text mt-1'}>
                    Posts
                </p>
            </div>
            <div className={'flex-1 justify-center flex flex-col items-center'}>
                <p className={'text-base'}>
                    {formatNumber(followers)}
                </p>
                <p className={'text-gray-text mt-1'}>
                    Followers
                </p>
            </div>
            <div className={'flex-1 justify-center flex flex-col items-center'}>
                <p className={'text-base'}>
                    {formatNumber(following)}
                </p>
                <p className={'text-gray-text mt-1'}>
                    Following
                </p>
            </div>
        </div>
    </div>
}

export default ProfileInfo