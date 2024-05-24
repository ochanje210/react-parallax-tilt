import React, { useEffect, useRef, useState } from 'react';

import Tilt from 'index';
import './TrackOnElement.demozap.css';

const TrackOnElement = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [key, setKey] = useState(1);

  useEffect(() => {
    setKey((prev) => prev + 1);
  }, []);

  return (
    <div className="track-on-element">
      <div className="custom-element" ref={ref}></div>
      <Tilt
        key={key}
        className="background-stripes react-parallax-tilt"
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.75}
        glarePosition="all"
        scale={1.02}
        trackOnElement={ref.current}
      >
        <div className="inner-element">
          <div>React</div>
          <div>Parallax Tilt</div>
          <div>👀</div>
        </div>
      </Tilt>
    </div>
  );
};

export default TrackOnElement;
