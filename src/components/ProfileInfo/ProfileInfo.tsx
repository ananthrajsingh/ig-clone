import React from 'react';
import './ProfileInfo.scss';
import { GlobalProps } from '../app/App';
import Avatar, { AvatarSize } from '../Avatar/Avatar';
import { getFormattedNumber } from '../../utils/number-helpers';

interface ProfileInfoProps extends GlobalProps {
    name: string
    username: string
    postCount: number
    followerCount: number
    followingCount: number
}



const ProfileInfo: React.FC<ProfileInfoProps> = props => {

    // TODO Get avatar from props and replace placeholder
    const {name, username, postCount, followerCount, followingCount} = props;


    return <div className={`${props?.className} flex flex-col bg-gray-dark justify-center items-center`}>
        <Avatar size={AvatarSize.md}> </Avatar>
        <div className={'flex flex-col w-full h-auto items-center mt-6 '}>
            <p className={'text-xl font-bold block'}>
                {name}
            </p>
            <p className={'text-base text-gray-text mt-1'}>
                {username}
            </p>
        </div>

        {/*Right margin is more than left as it gives better look due to fixed texts*/}
        <div className={'flex flex-row flex-no-wrap justify-evenly w-full mt-6 mr-8 ml-6'}>
            <div className={'flex-1 justify-center flex flex-col items-center'}>
                <p className={'text-base'}>
                    {getFormattedNumber(postCount)}
                </p>
                <p className={'text-gray-text mt-1'}>
                    Posts
                </p>
            </div>
            <div className={'flex-1 justify-center flex flex-col items-center'}>
                <p className={'text-base'}>
                    {getFormattedNumber(followerCount)}
                </p>
                <p className={'text-gray-text mt-1'}>
                    Followers
                </p>
            </div>
            <div className={'flex-1 justify-center flex flex-col items-center'}>
                <p className={'text-base'}>
                    {getFormattedNumber(followingCount)}
                </p>
                <p className={'text-gray-text mt-1'}>
                    Following
                </p>
            </div>
        </div>
    </div>;
};

export default ProfileInfo;
