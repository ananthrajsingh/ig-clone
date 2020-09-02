import React, {useState} from 'react';
import './StoryList.scss';
import {CirclePlay} from 'grommet-icons';
import {For, If} from 'react-extras';
import Avatar, {AvatarSize} from '../Avatar/Avatar';
import {getDummyUser, User} from "../../model/User";
import dummyStoryImage from "../../images/placeholder_2.png"
import {Layer} from "grommet/es6";
import {getDummyStories} from "../Story/story-helper";

const StoryList: React.FC = () => {

    let [story, setStory] = useState<string | null>(null)
    // let [storyCount, setStoryCount] = useState<number>(0)
    let storyCount = 0

    function onAvatarClick(user: User) {
        fetchStories(user)
    }

    /**
     * Gets all the stories associated from the backend and initiates the display of stories.
     * @param user The user for whom the stories are to be fetched
     */
    function fetchStories(user: User) {
        // TODO Fetch real stories from backend
        let stories = getDummyStories(user)
        // setStoryCount(stories.length)
        storyCount = stories.length
        showStories(stories)
    }

    function showStories(stories: string[]) {
        if (storyCount === 0) {
            setStory(null)
            return
        }
        setStory(stories[stories.length - storyCount])
        // let newCount = storyCount - 1
        // console.log("newCount: " + newCount)
        // setStoryCount(1) // for debugging
        storyCount--
        console.log("storyCount: " + storyCount)
        setTimeout(
            function () {
                showStories(stories)
            }, 3000
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
        <If condition={story !== null}>
            <Layer
                className={'w-full h-full bg-black absolute z-50 bg-opacity-90'}
                onEsc={() => setStory(null)}
                onClickOutside={() => setStory(null)}
            >
                <img
                    className={'h-90 m-auto mt-12'}
                    src={story ? story : dummyStoryImage}
                    alt={"Dummy Story"}/>
                {/*<Button label="close" onClick={() => setStory(null)} />*/}
            </Layer>
            {/*<div className={'w-full h-full inset-0 bg-black absolute z-50 bg-opacity-90'}>*/}
            {/*    <img*/}
            {/*        className={'h-90 m-auto mt-12'}*/}
            {/*        src={dummyStoryImage}*/}
            {/*        alt={"Dummy Story"}/>*/}
            {/*</div>*/}
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
