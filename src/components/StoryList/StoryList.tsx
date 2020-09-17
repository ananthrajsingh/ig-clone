import React, {useState, useEffect, useRef} from 'react';
import './StoryList.scss';
import {CirclePlay} from 'grommet-icons';
import {If} from 'react-extras';
import Avatar from '../Avatar/Avatar';
import {Layer} from "grommet/es6";
import {StoryItemModel} from "../../models/ui/story-item.model";
import {UserModel} from "../../models/user.model";
import {getDummyStoryItemArray} from "../../mock-generators/story-item.generator";
// import {getDummyUser} from "../../mock-generators/user.generator";
import {AvatarProps} from "../Avatar/Avatar";
import {getDummyStoryAvatars} from "../../mock-generators/story-avatar.generator";

// TODO StoryList should get as props the logged in user for which we are loading the stories
const StoryList: React.FC = () => {

    let [storyAvatars, setStoryAvatars] = useState<AvatarProps[] | null>(null)
    let [storyUser, setStoryUser] = useState<UserModel | null>(null)
    let [story, setStory] = useState<StoryItemModel | null>(null)
    /*
    Uses setState because useEffect depends on it.
    When Story item is seen, this is updated hence the useEffect is called
    initially when stories are fetched and populated, then when subsequently when they
    are set seen.
    */
    let [stories, setStories] = useState<StoryItemModel[]>([])
    let storyCount = useRef(0)
    let currentUser = useRef<UserModel | null>(null)
    let nextStoryTimeout = useRef<NodeJS.Timeout | null>(null)


    useEffect(() => {
        fetchStoryAvatars('some_user_id')
    }, [])

    function fetchStoryAvatars(userId: string) {
        // TODO Fetch from backend instead
        setStoryAvatars(getDummyStoryAvatars(userId))
    }
    /**
     * Callback method passed to {@link Avatar} component. Executed when an {@link Avatar} is clicked.
     * @param user Tells which user's Avatar was clicked
     */
    function onAvatarClick(user: UserModel) {
        currentUser.current = user
        setStoryUser(user)
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
        if (nextStoryTimeout.current !== null) return
        setStories(getDummyStoryItemArray(user))
    }

    useEffect(() => {
        if (stories !== []) {
            if (story === null) {
                storyCount.current = stories.length
            }
            showStories()
        }
    }, [stories])


    function showStories() {
        if (storyCount.current === 0) {
            // Because we want the last story also to be shown for x seconds
            nextStoryTimeout.current = setTimeout(
                function () {
                    setStory(null)
                    nextStoryTimeout.current = null
                },
                3000)
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


    /**
     * Used to explicitly increment stories, faster than the normal flow.
     */
    function incrementStory() {
        if (storyCount.current <= 0) return
        if (nextStoryTimeout.current !== null) {
            clearInterval(nextStoryTimeout?.current)
        }
        showNextStory()
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
        if (storyCount.current === 0) {
            setAvatarAsSeen(currentUser?.current)
        }
    }

    /**
     * Used to show the previous story for the current user. If the story is first story, it's time
     * is refreshed.
     */
    function decrementStory() {
        // If current count is equal to total - 1 means first story is being shown

        if (storyCount.current < stories.length) {
            if (nextStoryTimeout.current !== null) {
                clearInterval(nextStoryTimeout?.current)
            }
            showPrevStory()
        }
    }

    function showPrevStory() {
        storyCount.current = storyCount.current + 2
        if (storyCount.current > stories.length) storyCount.current = stories.length
        let currentIndex = stories.length - storyCount.current
        // In order to instantly change the story.
        // If we skip below line, previous story will be shown anyway
        // but not instantly on click, rather, after the time of current story elapses
        setStory(stories[currentIndex])
        showStories()
    }

    /**
     * Resets the states and refs used for stories. Reset takes care of aborting the
     * process of showing stories as this leads to failing conditions to show story.
     */
    function abortShowingStories() {
        if (nextStoryTimeout.current !== null) {
            clearInterval(nextStoryTimeout?.current)
        }
        setStory(null)
        // Only storyCount changes instantly, so check for this when showing story
        storyCount.current = 0
        setStories([])
    }

    function setAvatarAsSeen(user: UserModel | null) {
        if (storyAvatars !== null) {
            let items = [...storyAvatars]
            for (let avatar of items) {
                if (avatar.user.username === user?.username) {
                    avatar.showRing = false
                }
            }
            setStoryAvatars(items)
        }
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
                {/*<div className={'flex flex-row w-1/4 m-auto mt-8'}>*/}
                {/*    {stories.map((storyItemModel, i) =>*/}
                {/*        <div*/}
                {/*            key={i}*/}
                {/*            className={"h-1 mr-1 flex-1 " + getBarBackground(storyItemModel)}*/}
                {/*        />*/}
                {/*    )}*/}
                {/*</div>*/}

                <div className={'w-1/4 m-auto mt-12 relative'}>
                    <div className={'flex flex-row w-full m-auto mb-12'}>
                        <div
                            className={'Avatar rounded-full p-2 h-6 w-6'}
                            // TODO Change placeholder image
                            style={{background: 'url("assets/images/others/placeholder-dp.png") 50% 50% no-repeat'}}>
                        </div>
                        <p className={'flex-1 ml-2 text-white'}>
                            {storyUser?.username}
                        </p>
                    </div>
                    <div className={'flex flex-row w-full m-auto mt-8 mb-4'}>
                        {stories.map((storyItemModel, i) =>
                            <div
                                key={i}
                                className={"h-1 mr-1 flex-1 " + getBarBackground(storyItemModel)}
                            />
                        )}
                    </div>
                    <img
                        onClick={() => incrementStory()}
                        className={'h-full mr-1 w-4 z-10 absolute right-0'}
                        src={'assets/images/icons/story_next.svg'}
                        alt={'Next Story'}
                    />
                    <img
                        onClick={() => decrementStory()}
                        className={'h-full ml-1 w-4 z-10 absolute'}
                        src={'assets/images/icons/story_prev.svg'}
                        alt={'Prev Story'}
                    />
                    <img
                        onClick={() => incrementStory()}
                        className={''}
                        src={story ? story.url : 'assets/images/others/placeholder_2.png'}
                        alt={"Story"}/>

                </div>

                {/*TODO Add Cross icon to dismiss stories*/}
            </Layer>
        </If>
        {/*<div*/}
        {/*    className={'flex flex-row justify-start items-center space-x-4 mt-8 max-w-full overflow-x-auto overflow-y-hidden'}>*/}
        {/*    <For of={Array.from(Array(25).keys())} render={(item, index) =>*/}
        {/*        <Avatar*/}
        {/*            key={index}*/}
        {/*            size={AvatarSize.sm}*/}
        {/*            onClick={onAvatarClick}*/}
        {/*            user={getDummyUser()}*/}
        {/*            showRing={true}*/}
        {/*        />*/}
        {/*    }/>*/}
        {/*</div>*/}

        <div
            className={'flex flex-row justify-start items-center space-x-4 mt-8 max-w-full overflow-x-auto overflow-y-hidden'}>
            {storyAvatars?.map((storyAvatar, i) => {
                return <Avatar
                    key={i}
                    size={storyAvatar.size}
                    onClick={onAvatarClick}
                    user={storyAvatar.user}
                    showRing={storyAvatar.showRing}
                />
            })}
        </div>
    </div>
}

export default StoryList;
