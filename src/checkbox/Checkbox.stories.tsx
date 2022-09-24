import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from './Checkbox';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Checkbox',
  component: Checkbox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Checkbox',
};


export const Basic = () => { 
  return (
    <Checkbox> Checkbox</Checkbox>
  )
}

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Checkbox',
};

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Checkbox',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Checkbox',
// };
