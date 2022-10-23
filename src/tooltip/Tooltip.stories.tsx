import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tooltip from './index';
import Button from '@/button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Tooltip',
  component: Tooltip,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Tooltip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: <span>Tooltip</span>,
};

export const Basic = () => {
  return <>
      <Tooltip title="prompt text">
    <span>Tooltip will show on mouse enter.</span>
  </Tooltip>
  </>
}

const text = <span>prompt text</span>;

const buttonWidth = 70;

// export const Placement = () => (
//   <div className="demo">
//     <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
//       <Tooltip placement="topLeft" title={text}>
//         <Button>TL</Button>
//       </Tooltip>
//     </div>
//   </div>);

export const Placement = () => {
  return  (<div className="demo">
    <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
      <Tooltip  placement="topLeft"  title={text}>
        <Button>Minnn</Button>
        {/* <span>Tooltip will show on mouse enter.</span> */}
      </Tooltip>
    </div>
     
  </div>)
}