import React from 'react';
import './Avatar.scss';
import { GlobalProps } from '../app/App';



export enum AvatarSize {
    md = 1,
    sm
}


// TODO they won't be optional
interface AvatarProps extends GlobalProps {
    avatarUrl?: string
    showRing?: boolean
    animateRing?: number
    addMode?: number
    size?: AvatarSize
}



const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => (
  <div className={'flex relative sm:invisible justify-center clear-both' + ' ' + getClassBySize(props.size)}>
      <img src={'/assets/images/gradient-loop.svg'} alt={'ring'}
           className={'h-full w-auto'}/>
      <div
        className={'Avatar absolute rounded-full p-2'+ ' ' + getClassBySize(props.size)}
        style={{background: 'url("/assets/images/placeholder-dp.png") 50% 50% no-repeat'}}>
      </div>
  </div>
);


function getClassBySize(size: AvatarSize | undefined): string {
    if (!size || size === AvatarSize.md) {
        return 'h-24 w-24 min-w-24 min-h-24';
    }
    else if (size === AvatarSize.sm) {
        return 'h-20 w-20 min-w-20 min-h-20';
    }
    return 'h-24 w-24';
}


export default Avatar;

// TODO
//  this takes avatar url in props, boolean to showRing, boolean to animate the ring <as soon as this toggles, we also show and hide the animation, statefull :)>
//  this also takes a param, boolean, `isAddMode`, and shows a blue gradient with a + button on it, animation is overridden to be false if this is true.
