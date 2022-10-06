import React, { CSSProperties, ReactNode } from 'react';
// （1）传入一个对象：classnames({class1:true,class2:false}) ，
// true表示相应的class生效，反之false表示不生效。
//（2）接受多个类名：classnames(class1,class2,{ class3:false })
import classNames from 'classnames';
import Item from './Item';

import './index.scss';

export interface menuProps extends React.HTMLAttributes<HTMLElement> {
  prefix?: string;
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
  mode?: 'vertical' | 'horizontal' | 'inline';
  theme?: 'light' | 'dark';
  defaultSelectedKeys?: Array<string>;
}

const Menu = (props: menuProps) => {
  const { prefix = 'ant-',children, style, className,  mode = 'vertical',
  theme = 'light', ...others} = props;
  const cls = classNames({
    [`${prefix}menu`]: true,
    [`${prefix}menu-root`]: true,
    [`${prefix}menu-${mode}`]: true,
    [`${prefix}menu-${theme}`]: true,
    [className as string]: !!className
})

  // const newChildren = (children as any[])?.map((i:any) => (
  //   <Item id={i.key} key={i.key} icon={i.icon}>{i.label}</Item>
  // ))


  return <ul {...others} className={cls} style={style}>{children}</ul>
}

export default Menu ;