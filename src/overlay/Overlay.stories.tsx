import React, { useRef, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Overlay from './index';

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
    border: '1px solid black',
    width: 300,
    height: 300
  }}>
    Content
  </div>,
};


export const Basic = () => { 
  return (
    <Overlay visible={true}>primary Overlay</Overlay>
  )
}

export const UnderControl = () => {
  const [visible, setVisible] = useState(true);
  const buttonRef = useRef(null);
  return <>
    <button onClick={() => setVisible(!visible)} ref={buttonRef}>click</button>
    <Overlay visible={visible} onVisibleChange={(v: any) => setVisible(v)}
      target={() => buttonRef.current}
    >
      <div style={{
        border: '1px solid black',
        width: 300,
        height: 300
      }}>
        Under Control Overlay
      </div>
    </Overlay>
  </>
}
