import React, {useState} from 'react';
import './StoryList.scss';
import { CirclePlay } from 'grommet-icons';
import {For, If} from 'react-extras';
import Avatar, { AvatarSize } from '../Avatar/Avatar';
import {getDummyUser, User} from "../../model/User";

const StoryList: React.FC = () => {

    let [showStory, setShowStory] = useState<User | null>(null)

    function onAvatarClick(user: User) {
        console.log(user.firstName + " clicked")
        setShowStory(user)
        setTimeout(
            function () {
                setShowStory(null)
            }, 2000
        )
    }

    // removing space-y-8 since  it hindered with story with margin
    return <div className={'flex flex-col justify-start items-center children:w-full'}>
        <div className={'flex flex-row justify-between items-center'}>
            <p className={'font-bold text-xl'}>Stories</p>
            <div className={'flex flex-row justify-end items-center space-x-4 w-full children:cursor-pointer'}>
                <CirclePlay color='white' size='medium'/>
                <p className={'text-base'}>Watch all</p>
            </div>
        </div>
        <If condition={showStory !== null}>
            <div className={'w-full h-full inset-0 bg-black absolute z-50 bg-opacity-90'}>

            </div>
        </If>

        {/*added mt-8 to compensate for removal of space-y-8 from root*/}
        <div
            className={'flex flex-row justify-start items-center space-x-4 mt-8 max-w-full overflow-x-auto overflow-y-hidden'}>
            <For of={Array.from(Array(25).keys())} render={(item, index) =>
                <Avatar
                        key={index}
                        size={AvatarSize.sm}
                        onClick={onAvatarClick}
                        user={getDummyUser()}
                        showRing={true}
                />
            }/>
        </div>
    </div>
}

export default StoryList;
