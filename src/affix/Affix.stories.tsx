import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Affix from './index';
import Button from '../button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Affix',
  component: Affix,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Affix>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Affix> = (args) => <Affix {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  offsetTop: 10,
  children: <> <Button type="primary" >
    Affix top
  </Button>
  </>,
};


export const Basic = () => { 
  return (
    <Affix> Affix</Affix>
  )
}


