import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Radio from './index';

const RadioGroup = Radio.Group;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/RadioGroup',
  component: RadioGroup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RadioGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: [
    <Radio value="1" key="1" >选项1</Radio>,
    <Radio value="2" key="2" >选项2</Radio>,
    <Radio value="3" key="3" >选项3</Radio>,
  ],
};

export const UnderControl = () => {
  return <RadioGroup value="3">
    <Radio value="1" key="1" >选项1</Radio>
    <Radio value="2" key="2" >选项2</Radio>
    <Radio value="3" key="3" >选项3</Radio>
  </RadioGroup>
}
// export const Basic = () => {
//   return <>
//     <Group onChange={e=>console.log(e)}>Primary Group</Group>
//   </>
// }



// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Group',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Radio',
// };
