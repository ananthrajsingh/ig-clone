import React from 'react';
import './Dashboard.scss';
import { lazy, mount, redirect, route } from 'navi';
import { Router, View } from 'react-navi'
import FeedBoard from '../FeedBoard/FeedBoard';
import Explore from '../Explore/Explore';


const routes =
  mount({
      '/': redirect('/feed'),
      '/feed': route({
          view: <FeedBoard/>,
      }),
      '/explore': route({
          view: <Explore/>,
      }),
  })
const Dashboard: React.FC = () => (
  <Router routes={routes}>
          <View />
  </Router>
);

export default Dashboard;
