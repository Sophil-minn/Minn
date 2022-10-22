import React, { useRef, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Overlay from './index';
import Button from '../button';

const { Popup } = Overlay;
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Overlay',
  component: Overlay,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Overlay>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Overlay> = (args) => <Overlay {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: <div style={{
    border: '1px solid yellow',
    width: 300,
    height: 300
  }}>
    Content
  </div>,
};


export const Basic = () => { 
  return (
    <Overlay visible onVisibleChange={(e: any) => console.log(e)}>
      <div style={{
        border: '1px solid green',
        width: 30,
        height: 30
      }}>
        Primary Overlay
      </div>
    </Overlay>
  )
}


export const UnderControl = () => {
  const [visible, setVisible] = useState(true);
  const buttonRef = useRef(null);
  return <>
    <Button onClick={() => setVisible(true)} ref={buttonRef}>click</Button>
    <Overlay visible={visible} onVisibleChange={(v: boolean) => setVisible(v)} target={() => buttonRef.current}>
      <div style={{
        border: '1px solid black',
        width: 30,
        height: 30
      }}>
        Under Control Overlay
      </div>
    </Overlay>
  </>
}

export const Points = () => {
  const [visible, setVisible] = useState(true);
  const buttonRef = useRef(null);
  return <>
    <Button onClick={() => setVisible(true)} ref={buttonRef}>click</Button>
    <Overlay visible={visible} onVisibleChange={(v: boolean) => setVisible(v)}
      target={() => buttonRef.current}
      points={['bl', 'tl']}
      placement='left'
    >
      <div style={{
        border: '1px solid black',
        width: 30,
        height: 30
      }}>
        Points
      </div>
    </Overlay>
  </>
}

export const Placement = () => {
  const ref1 = useRef(null);
  const topLeft = <Button ref={ref1}>topLeft</Button>;
  const top = <Button>top</Button>;
  const topRight = <Button>topRight</Button>;
  const leftTop = <Button>leftTop</Button>;
  const left = <Button>left</Button>;
  const leftBottom = <Button>leftBottom</Button>;
  const rightTop = <Button>rightTop</Button>;
  const right = <Button>right</Button>;
  const rightBottom = <Button>rightBottom</Button>;
  const bottomLeft = <Button>bottomLeft</Button>;
  const bottom = <Button>bottom</Button>;
  const bottomRight = <Button>bottomRight</Button>;

  return <div style={{ paddingLeft: 200 }}>
     <div style={{ marginLeft: 75 }}>
      <Popup trigger={topLeft} placement="topLeft">topLeft</Popup>
      <Popup trigger={top} placement="top">top</Popup>
      <Popup trigger={topRight} placement="topRight">topRight</Popup>
    </div>
    <div style={{ width: 80, float: "left" }}>
      <Popup trigger={leftTop} placement="leftTop">leftTop</Popup>
      <Popup trigger={left} placement="left">left</Popup>
      <Popup trigger={leftBottom} placement="leftBottom">leftBottom</Popup>
    </div>
    <div style={{ width: 80, marginLeft: 290 }}>
      <Popup trigger={rightTop} placement="rightTop">rightTop</Popup>
      <Popup trigger={right} placement="right">right</Popup>
      <Popup trigger={rightBottom} placement="rightBottom">rightBottom</Popup>
    </div>
    <div style={{ marginLeft: 75 }}>
      <Popup trigger={bottomLeft} placement="bottomLeft">bottomLeft</Popup>
      <Popup trigger={bottom} placement="bottom">bottom</Popup>
      <Popup trigger={bottomRight} placement="bottomRight">bottomRight</Popup>
    </div>
  </div>
}