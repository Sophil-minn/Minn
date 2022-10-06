import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Menu from './index';
import { MailOutlined } from '@ant-design/icons';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Menu',
  component: Menu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Menu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Menu',
};


export const Basic = () => { 
  return (
      <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
        <Menu.Item key="mail" icon={<MailOutlined />}>
          999
        </Menu.Item>
      {/* <Menu.SubMenu key="SubMenu" title="Navigation Two - Submenu" icon={<SettingOutlined />}>
        <Menu.Item key="two" icon={<AppstoreOutlined />}>
          Navigation Two
        </Menu.Item>
        <Menu.Item key="three" icon={<AppstoreOutlined />}>
          Navigation Three
        </Menu.Item>
      </Menu.SubMenu> */}
    </Menu>
  )
}


