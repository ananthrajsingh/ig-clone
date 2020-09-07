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
    let [stories, setStories] = useState<StoryItemModel[]>(getDummyStoryItemArray(getDummyUser()))
    let storyCount = 0
    let totalStoryCount = 0

    function onAvatarClick(user: UserModel) {
        fetchStories(user)
    }

    function getBarBackground(story: StoryItemModel | null) {
        if (story)
            return story.seen ? 'bg-gray-normal' : 'bg-white'
        return 'bg-white'
    }

    /**
     * Gets all the stories associated from the backend and initiates the display of stories.
     * @param user The user for whom the stories are to be fetched
     */
    function fetchStories(user: UserModel) {
        // TODO Fetch real stories from backend
        // Redundant call below
        console.log("Fetching stories...")
        setStories(getDummyStoryItemArray(user))
        totalStoryCount = stories.length
        storyCount = totalStoryCount
        showStories(stories)
    }

    function showStories(stories: StoryItemModel[]) {
        if (storyCount === 0) {
            setStory(null)
            return
        }
        let currentIndex = stories.length - storyCount
        setSeenAtIndex(currentIndex)
        // console.log(stories)

        setStory(stories[currentIndex])
        storyCount--
        setTimeout(
            function () {
                showStories(stories)
            }, 3000
        )
    }
    function setSeenAtIndex(i: number) {
        console.log("Setting seen at: " + i)
        let items: StoryItemModel[] = [...stories]
        let item: StoryItemModel = {...items[i]}
        item.seen = true
        items[i] = item
        setStories(items)
        for (let item of stories) {
            console.log(item)
        }
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
                            className={"h-1 mr-1 flex-1 " + getBarBackground(storyItemModel)}
                        />
                    )}
                </div>
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
