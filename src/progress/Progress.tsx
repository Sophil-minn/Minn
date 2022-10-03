import React, { CSSProperties, ReactNode } from 'react';
// （1）传入一个对象：classnames({class1:true,class2:false}) ，
// true表示相应的class生效，反之false表示不生效。
//（2）接受多个类名：classnames(class1,class2,{ class3:false })
import classNames from 'classnames';

import './index.scss';

export interface progressProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  type?: 'line' | 'circle';
  percent?: number;
  size?: 'small' | 'medium' | 'large';
  status?: 'active' | 'exception'
  children?: ReactNode;
  style?: CSSProperties;
}

const Progress = (props: progressProps) => {
  const { children,className, style, percent = 0, status, type = 'line', ...others} = props;
  let processColor = 'blue';
  if (status === 'exception') {
    processColor = '#ff4d4f';
  }
  const cls = classNames({
    'ant-progress': true,
    [className as string]: !!className
  });
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 8
    }}>
      <div style={{ background: '#0000000a', borderRadius: 100, width: '100%' }}>
        <div style={{
          background: processColor, width: `${percent}%`, height: 8,
          borderRadius: 100,
          transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)'
        }} />
      </div>
      <div>{percent}%</div>
    </div >)
}

export default Progress ;