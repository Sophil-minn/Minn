import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Progress from './index';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Progress',
  component: Progress,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Progress>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Progress> = (args) => <Progress {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  percent: 30
};


export const Basic = () => {
  return <>
    <Progress percent={30}>Primary Progress</Progress>
    <br/>
    <Progress percent={70} status="exception" />

  </>
}

export const Dynamic: React.FC = () => {
  const [percent, setPercent] = React.useState(0);

  const increase = () => {
    let newPercent = percent + 10;
    if (newPercent > 100) {
      newPercent = 100;
    }
    setPercent(newPercent);
  };

  const decline = () => {
    let newPercent = percent - 10;
    if (newPercent < 0) {
      newPercent = 0;
    }
    setPercent(newPercent);
  };

  return (
    <>
      <Progress percent={percent} />
      <br /><br />

      <MinusOutlined onClick={decline} />
      <PlusOutlined onClick={increase} />
    </>
  );
};

