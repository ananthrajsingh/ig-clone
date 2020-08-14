import React from 'react';
import { GlobalProps } from '../app/App';



interface ExploreProps extends GlobalProps {

}



const Explore: React.FC<ExploreProps> = (props: ExploreProps) => (
  <div className="Explore">
      Explore Component
  </div>
);

export default Explore;
