import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar from './index';
import { UserOutlined } from '@ant-design/icons';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Avatar',
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Avatar',
};


export const Basic = () => { 
  return (
    <>
    <div>
      <Avatar size={64} icon={<UserOutlined />} />
      <Avatar size="large" icon={<UserOutlined />} />
      <Avatar icon={<UserOutlined />} />
      <Avatar size="small" icon={<UserOutlined />} />
    </div>
    <div>
      <Avatar shape="square" size={64} icon={<UserOutlined />} />
      <Avatar shape="square" size="large" icon={<UserOutlined />} />
      <Avatar shape="square" icon={<UserOutlined />} />
      <Avatar shape="square" size="small" icon={<UserOutlined />} />
    </div>
    <div>
      <Avatar icon={<UserOutlined />} />
      <Avatar>U</Avatar>
      <Avatar size={40}>USER</Avatar>
      <Avatar src="https://joeschmoe.io/api/v1/random" />
      <Avatar src={<img src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />
      <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
      <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
    </div>
  </>
  )
}


// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Avatar',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Avatar',
// };
