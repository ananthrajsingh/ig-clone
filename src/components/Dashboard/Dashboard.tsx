import React from 'react';
import './Dashboard.scss';
import { GlobalProps } from '../app/App';
import { TextInput } from 'grommet';
import { AddCircle, CirclePlay, Notification, Search, Send } from 'grommet-icons';



interface DashboardProps extends GlobalProps {

}



const Dashboard: React.FC<DashboardProps> = (props) => (
    <div
      className={`${props?.className} bg-gray-normal pt-12 px-16 rounded-l-lg flex flex-col justify-start items-center space-y-10 children:w-full`}>
        <div className={'flex flex-row justify-between items-center'}>
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
        <div className={'flex flex-row justify-between items-center '}>
            <p className={'font-bold text-xl'}>Stories</p>
            <div className={'flex flex-row justify-end items-center space-x-4 w-full children:cursor-pointer'}>
                <CirclePlay color='white' size='medium'/>
                <p className={'text-base'}>Watch all</p>
            </div>
        </div>

    </div>
  )
;

export default Dashboard;
