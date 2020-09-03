import React from "react";
import "./FeedList.scss";
import FeedItem from "../FeedItem/FeedItem";
import { getRandomFeed } from "../../mock-generators/feed.generator";
import Masonry from "react-masonry-css";

const FeedList: React.FC = () => (
  <div className="feed-list w-100 overflow-y-auto">
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
          <FeedItem feedItem={getRandomFeed()} key={1}/>
          <FeedItem feedItem={getRandomFeed()} key={2}/>
          <FeedItem feedItem={getRandomFeed()} key={3}/>
          <FeedItem feedItem={getRandomFeed()} key={4}/>
          <FeedItem feedItem={getRandomFeed()} key={5}/>
          <FeedItem feedItem={getRandomFeed()} key={6}/>
          <FeedItem feedItem={getRandomFeed()} key={7}/>
          <FeedItem feedItem={getRandomFeed()} key={8}/>
          <FeedItem feedItem={getRandomFeed()} key={9}/>
          <FeedItem feedItem={getRandomFeed()} key={10}/>
          <FeedItem feedItem={getRandomFeed()} key={11}/>
          <FeedItem feedItem={getRandomFeed()} key={12}/>
          <FeedItem feedItem={getRandomFeed()} key={13}/>
          <FeedItem feedItem={getRandomFeed()} key={14}/>
          <FeedItem feedItem={getRandomFeed()} key={15}/>
          <FeedItem feedItem={getRandomFeed()} key={16}/>
          <FeedItem feedItem={getRandomFeed()} key={17}/>
          <FeedItem feedItem={getRandomFeed()} key={18}/>
          <FeedItem feedItem={getRandomFeed()} key={18}/>
          <FeedItem feedItem={getRandomFeed()} key={20}/>
          <FeedItem feedItem={getRandomFeed()} key={21}/>
          <FeedItem feedItem={getRandomFeed()} key={22}/>
      </Masonry>
  </div>
);

export default FeedList;
