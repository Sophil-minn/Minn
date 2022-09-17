import React, { ReactNode } from 'react';
// （1）传入一个对象：classnames({class1:true,class2:false}) ，
// true表示相应的class生效，反之false表示不生效。
//（2）接受多个类名：classnames(class1,class2,{ class3:false })
import classNames from 'classnames';

import './index.css';

interface buttonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  type?: 'normal' | 'primary';
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
}

const Button = (props: buttonProps) => {
  const { children, className, type = 'normal', onClick, onBlur, ...others} = props;
  const cls = classNames({
    'ant-btn': true,
    [`ant-btn-${type}`]: type,
    [className as string]: !!className
  });
  return <button {...others} className={cls} onClick={onClick} onBlur={onBlur}>{children}</button>
}

export default Button;