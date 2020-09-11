import React, {useState, useEffect, useRef} from 'react';
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
    /*
    Uses setState because useEffect depends on it.
    When Story item is seen, this is updated hence the useEffect is called
    initially when stories are fetched and populated, then when subsequently when they
    are set seen.
    */
    let [stories, setStories] = useState<StoryItemModel[]>([])
    let storyCount = useRef(0)
    let nextStoryTimeout = useRef<NodeJS.Timeout | null>(null)
    let totalStoryCount = 0

    /**
     * Callback method passed to {@link Avatar} component. Executed when an {@link Avatar} is clicked.
     * @param user Tells which user's Avatar was clicked
     */
    function onAvatarClick(user: UserModel) {
        fetchStories(user)
    }

    /**
     * Decide and return the color of the progress bar depending on whether the story is seen or not.
     * @param story The story which is to analysed for seen
     */
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
        console.log("Fetching stories...")
        setStories(getDummyStoryItemArray(user))
    }

    useEffect(() => {
        if (stories !== []) {
            if (story === null) {
                totalStoryCount = stories.length
                storyCount.current = totalStoryCount
            }
            showStories()
        }
    }, [stories])


    function showStories() {
        if (storyCount.current === 0) {
            setStory(null)
            return
        }
        nextStoryTimeout.current = setTimeout(
            function () {
                if (storyCount.current !== 0) {
                    showNextStory()
                }
            }, 3000
        )
    }

    function showNextStory() {
        let currentIndex = stories.length - storyCount.current
        setStory(stories[currentIndex])
        storyCount.current = storyCount.current - 1
        // Below function should be called after the count is updated
        // If we setSeenAtIndex before updating storyCount, storyCount is not
        // updated for the first call for some reason, maybe because asynchronously
        // useEffect is called and updating storyCount is ignored.
        setSeenAtIndex(currentIndex)
    }

    /**
     * Used to explicitly increment stories, faster than the normal flow.
     */
    function incrementStory() {
        if (nextStoryTimeout.current !== null) {
            clearInterval(nextStoryTimeout?.current)
        }
        showNextStory()
    }

    /**
     * Resets the states and refs used for stories. Reset takes care of aborting the
     * process of showing stories as this leads to failing conditions to show story.
     */
    function abortShowingStories() {
        console.log("Aborting...")
        setStory(null)
        // Only storyCount changes instantly, so check for this when showing story
        storyCount.current = 0
        setStories([])
    }

    function setSeenAtIndex(i: number) {
        let items: StoryItemModel[] = [...stories]
        let item: StoryItemModel = {...items[i]}
        item.seen = true
        items[i] = item
        setStories(items)
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
                onEsc={() => abortShowingStories()}
                onClickOutside={() => abortShowingStories()}
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
                    onClick={() => incrementStory()}
                    className={' w-1/4 m-auto mt-12'}
                    src={story ? story.url : 'assets/images/others/placeholder_2.png'}
                    alt={"Dummy Story"}/>
                {/*TODO Add Cross icon to dismiss stories*/}
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
