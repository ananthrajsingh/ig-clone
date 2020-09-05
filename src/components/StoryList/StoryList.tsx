import React, {useState} from 'react';
import './StoryList.scss';
import {CirclePlay} from 'grommet-icons';
import {For, If} from 'react-extras';
import Avatar, {AvatarSize} from '../Avatar/Avatar';
import {Layer} from "grommet/es6";
import {StoryItemModel} from "../../models/ui/story-item.model";
import {UserModel} from "../../models/user.model";
import {getDummyStoryItemArray} from "../../mock-generators/story-item.generator";
import {getDummyUser} from "../../mock-generators/user.generator";

const StoryList: React.FC = () => {

    let [story, setStory] = useState<StoryItemModel | null>(null)
    // let [storyCount, setStoryCount] = useState<number>(0)
    let storyCount = 0
    let stories = getDummyStoryItemArray(getDummyUser())
    let totalStoryCount = 0

    function onAvatarClick(user: UserModel) {
        fetchStories(user)
    }

    /**
     * Gets all the stories associated from the backend and initiates the display of stories.
     * @param user The user for whom the stories are to be fetched
     */
    function fetchStories(user: UserModel) {
        // TODO Fetch real stories from backend
        stories = getDummyStoryItemArray(user)
        // setStoryCount(stories.length)
        totalStoryCount = stories.length
        storyCount = totalStoryCount
        showStories(stories)
    }

    function showStories(stories: StoryItemModel[]) {
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
                <div className={'flex flex-row w-1/4 m-auto mt-8'}>
                    {stories.map((storyItemModel, i) =>
                        <div
                            key={i}
                            className={"h-1 mr-1 bg-white flex-1"}
                        />
                    )}
                </div>
                <For of={Array.from(Array(totalStoryCount).keys())} render={(item, index) =>
                    <div
                        key={index}
                        className={"w-8 h-2 mr-1 bg-white"}
                    />
                }/>
                <img
                    className={' w-1/4 m-auto mt-12'}
                    src={story ? story.url : 'assets/images/others/placeholder_2.png'}
                    alt={"Dummy Story"}/>
            </Layer>
        </If>
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
