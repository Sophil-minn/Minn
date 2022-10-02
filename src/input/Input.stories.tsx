import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './index';
import { UserOutlined } from '@ant-design/icons';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Basic = () => { 
  const [value, setValue] = useState('hello world');
  const [defaultValue,  setDefaultValue] = useState('maomi world2');
  return (
   <>
    <input defaultValue={defaultValue} value={defaultValue} onChange={e => setValue(e.target.value)}/>
    <br />
    <button onClick={() => setDefaultValue('11111')}>设置默认值</button>
   </>
  )
}

export const BasicValue = () => {
  return <Input placeholder='control usage' value="minn" />
}

export const BasicDefaultValue = () => {
  return <Input placeholder='control usage' defaultValue="minn" />
}

const onChange = (e: any) => {
  console.log('Change:', e.target.value);
};

export const MaxLength = () => (
  <>
    <Input maxLength={20} onChange={onChange} />
  </>
);

export const TextAreaBasic = () => (
  <>
    <Input.TextArea onChange={onChange} defaultValue="a\nb\nc\nd\ncddd"/>
  </>
);

export const TextAreaMaxLength = () => (
  <>
    <Input.TextArea showCount maxLength={20} onChange={onChange} />
  </>
);


export const Prefix = () => {
  return <>
    <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
    <br />
    <br />
    <Input placeholder="default size" prefix={<UserOutlined />} />
    <br />
    <br />
    <Input size="small" placeholder="small size" prefix={<UserOutlined />} />
  </>
}



export const Control = () => {
  const [value, setValue] = React.useState('');
  return <>
    <Input value={value} onChange={(e:any) => setValue(e.target.value)} />
    <button onClick={() => setValue('set by button')}> set value</button>
  </>
}
