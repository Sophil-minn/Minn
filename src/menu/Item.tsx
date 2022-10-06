import React, { CSSProperties, ReactNode } from 'react';
// （1）传入一个对象：classnames({class1:true,class2:false}) ，
// true表示相应的class生效，反之false表示不生效。
//（2）接受多个类名：classnames(class1,class2,{ class3:false })
import classNames from 'classnames';

import './index.scss';

export interface ItemProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
  icon?: ReactNode;
}

const Item = (props: ItemProps) => {
  const { children, style, className,icon, ...others} = props;
  const cls = classNames({
    'ant-menu-item': true,
    [className as string]: !!className
  });
  return <li {...others} className={cls} style={style}>
    {icon ? <span className='ant-menu-item-icon'>{icon}</span>: null}
    {children}</li>
}

export default Item ;