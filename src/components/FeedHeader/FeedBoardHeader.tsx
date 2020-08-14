import React from 'react';
import { TextInput } from 'grommet';
import { AddCircle, Notification, Search, Send } from 'grommet-icons';
import { GlobalProps } from '../app/App';



interface FeedBoardHeaderProps extends GlobalProps {

}



const FeedBoardHeader: React.FC<FeedBoardHeaderProps> = (props: FeedBoardHeaderProps) => (
  <div className={`${props?.className} flex flex-row justify-between items-center`}>
      <div className={'max-w-3/10 min-w-xxs'}>
          <TextInput
            placeholder="Search"
            icon={<Search color='white' size='small' className={'exact-icon-size'}/>}
            className={'bg-gray-normal-contrast rounded-lg border-none'}/>
      </div>
      <div className={'flex flex-row justify-end items-center space-x-5 w-full children:cursor-pointer'}>
          <Notification color='white' size='small' className={'exact-icon-size'}/>
          <Send color='white' size='small' className={'exact-icon-size'}/>
          <div
            className={'flex flex-row justify-around items-center space-x-2 brand-gradient-bg py-3 px-5 rounded-lg'}>
              <AddCircle color='white' size='small' className={'exact-icon-size'}/>
              <p className={'font-semibold'}>Add photo</p>
          </div>
      </div>
  </div>
);

export default FeedBoardHeader;
