import React, { CSSProperties, ReactNode } from 'react';
// （1）传入一个对象：classnames({class1:true,class2:false}) ，
// true表示相应的class生效，反之false表示不生效。
//（2）接受多个类名：classnames(class1,class2,{ class3:false })
import classNames from 'classnames';
import Item from './Item';

import './index.scss';

export interface menuProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
  mode?: 'horizontal' | 'vertical';
  defaultSelectedKeys?: Array<string>;
}

const Menu = (props: menuProps) => {
  const { children, style, className, ...others} = props;
  const cls = classNames({
    'ant-menu': true,
    'ant-menu-root': true,
    [className as string]: !!className
  });

  // const newChildren = (children as any[])?.map((i:any) => (
  //   <Item id={i.key} key={i.key} icon={i.icon}>{i.label}</Item>
  // ))


  return <ul {...others} className={cls} style={style}>{children}</ul>
}

export default Menu ;