import React from 'react';
import './StoryList.scss';
import { CirclePlay } from 'grommet-icons';
import { For } from 'react-extras';
import Avatar, { AvatarSize } from '../Avatar/Avatar';
import {getDummyStoryItem} from "./story-helper";

const StoryList: React.FC = () => {

    return <div className={'flex flex-col justify-start items-center space-y-8 children:w-full'}>
        <div className={'flex flex-row justify-between items-center'}>
            <p className={'font-bold text-xl'}>Stories</p>
            <div className={'flex flex-row justify-end items-center space-x-4 w-full children:cursor-pointer'}>
                <CirclePlay color='white' size='medium'/>
                <p className={'text-base'}>Watch all</p>
            </div>
        </div>
        <div
            className={'flex flex-row justify-start items-center space-x-4 max-w-full overflow-x-auto overflow-y-hidden'}>
            <For of={Array.from(Array(25).keys())} render={(item, index) =>
                <Avatar size={AvatarSize.sm} key={index} stories={getDummyStoryItem()} clickable={true}/>
            }/>
        </div>
    </div>
}

export default StoryList;
