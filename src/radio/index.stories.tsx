import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Radio from './Radio';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Radio',
  component: Radio,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Radio>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Radio',
};


export const Basic = () => {
  return <>
    <Radio onChange={e=>console.log(e, e.target)}>Primary Radio</Radio>
  </>
}

export const UnChecked = () => {
  return <>
    <Radio checked={false}>Primary Radio</Radio>
  </>
}

export const Disabled = () => {
  return <>
    <Radio disabled> Radio</Radio>
  </>
}

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Radio',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Radio',
// };
