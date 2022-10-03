import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Switch from './index';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import Button from '../button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Switch',
  component: Switch,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Switch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Primary = Template.bind({});

export const Basic = () => { 
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <div>
    <Switch defaultChecked onChange={onChange} />
    <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
    <br />
    <Switch checkedChildren="1" unCheckedChildren="0" />
    <br />
    <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
    />
  </div>
  )
}

export const Disable = () => {
  const [disabled, setDisable] = useState(false);
  const toggle = () => setDisable((pre: boolean) => !pre);
  return (
    <div>
        <Switch disabled={disabled} style={{marginBottom: '8px'}} defaultChecked />
        <br />
        <Button type="primary" onClick={toggle}>
          Toggle disabled
        </Button>
      </div>
  )
}
