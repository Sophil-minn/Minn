import React, { CSSProperties, ReactNode } from 'react';
// （1）传入一个对象：classnames({class1:true,class2:false}) ，
// true表示相应的class生效，反之false表示不生效。
//（2）接受多个类名：classnames(class1,class2,{ class3:false })
import classNames from 'classnames';

import './index.scss';

export interface radioProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

const Radio = (props: radioProps) => {
  const { children, style, className, ...others} = props;
  const cls = classNames({
    'ant-radio': true,
    [className as string]: !!className
  });
  return <span {...others} className={cls} style={style}>{children}</span>
}

export default Radio ;