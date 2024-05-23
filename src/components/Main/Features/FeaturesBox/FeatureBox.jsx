import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FeatureBox.css';

const FeatureBox = ({ icon, title, description, link }) => {
  const [hovered, setHovered] = useState(false);

  const contentHide = useSpring({
    opacity: hovered ? 1 : 0,
    height: hovered ? '200px' : '0px',
  });

  return (
    <div className="features-post" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className="features-content">
        <div className="content-show">
          <h4>
            <FontAwesomeIcon icon={icon} size='xl' /><span className='ps-3'></span>
            {title}
          </h4>
        </div>
        <animated.div className="content-hide" style={{ ...contentHide }}>
          <p>{description}</p>
          <a href="#">{link}</a>
        </animated.div>
      </div>
    </div>
  );
};

export default FeatureBox;
