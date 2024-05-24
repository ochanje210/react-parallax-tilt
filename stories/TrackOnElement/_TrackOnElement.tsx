import React from 'react';
import { DemoTab } from 'react-demo-tab';

import Demo from './TrackOnElement.demozap';

const code = `import React from 'react';

import Tilt from 'index';
import './TrackOnElement.demozap.css';

const TrackOnElement = () => (
  <Tilt
    className="background-stripes track-on-window"
    perspective={500}
    glareEnable={true}
    glareMaxOpacity={0.75}
    glarePosition="all"
    scale={1.02}
    TrackOnElement={true}
  >
    <div className="inner-element">
      <div>React</div>
      <div>Parallax Tilt</div>
      <div>👀</div>
    </div>
  </Tilt>
);

export default TrackOnElement;
`;

const style = `@import '../ReactParallaxTilt.css';

.track-on-element {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: darkgreen;
  color: white;
  border: 5px solid black;
  border-radius: 20px;

  transform-style: preserve-3d;

  .inner-element {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    font-style: italic;
    color: white;
    transform: translateZ(60px);
  }
}
`;

export const _TrackOnElement = () => (
  <DemoTab code={code} style={style} codeExt="tsx" styleExt="css">
    <Demo />
  </DemoTab>
);
