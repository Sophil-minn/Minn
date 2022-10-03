import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Affix from './index';
import Button from '../button';
import Affix2 from './Affix2';

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
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  offsetTop: 10,
  children: <> <Button type="primary" >
    Affix top
  </Button>
  </>,
};

export const Affix2Demo = () => {
  return <>
    <Affix2 offsetTop={10}>
      <Button type="primary" >
        Affix top2
      </Button>
    </Affix2>
    <br/>
    <Button type="primary" >
        Others Button
      </Button>
  </>
}

export const Basic = () => { 
  return (
    <>
      <Affix offsetTop={10}> 
        <Button type="primary">
          Affix top
        </Button>
      </Affix>
      <div>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
      </div>
      <div>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
      </div>
      <div>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
      </div>
      <div>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
      </div>

      <div>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
      </div>
      <div>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
      </div>
      <div>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
      </div>
    </>
  )
}


