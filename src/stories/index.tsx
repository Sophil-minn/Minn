import React, { ReactNode } from 'react';
// （1）传入一个对象：classnames({class1:true,class2:false}) ，
// true表示相应的class生效，反之false表示不生效。
//（2）接受多个类名：classnames(class1,class2,{ class3:false })
import classNames from 'classnames';

import './index.scss';

interface buttonProps {
  className?: string;
  type?: 'normal' | 'primary' | "dashed" | "text" | "link";
  size?: "small" | "medium" | 'large';
  children?: ReactNode;
  style?: React.CSSProperties;
}

const Button = (props: buttonProps) => {
  const { children, size = 'medium', className, type = 'normal', style} = props;
  const cls = classNames({
    'ant-btn': true,
    [`ant-btn-${size}`]: size,
    [`ant-btn-${type}`]: type,
    [className as string]: !!className
  });
  return <button className={cls} style={style}>{children}</button>
}

export default Button;