import React from 'react';
import './Avatar.scss';

const Avatar: React.FC = () => (
  <div className={'flex relative h-24 sm:invisible w-full justify-center'}>
      <img src={'/assets/images/gradient-loop.svg'} alt={'ring'}
           className={'h-full w-auto'}/>
      <div
        className={'Avatar absolute rounded-full h-full w-24 sm:w-24 p-2'} style={{background: 'url("/assets/images/placeholder-dp.png") 50% 50% no-repeat'}}>
      </div>
  </div>
);

export default Avatar;
