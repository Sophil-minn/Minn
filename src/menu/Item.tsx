import React, { CSSProperties, ReactNode } from 'react';
// （1）传入一个对象：classnames({class1:true,class2:false}) ，
// true表示相应的class生效，反之false表示不生效。
//（2）接受多个类名：classnames(class1,class2,{ class3:false })
import classNames from 'classnames';

import './index.scss';

export interface ItemProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
    prefix?: string;
    key?: string;
    id?: string;
    icon?: ReactNode;
    children?: ReactNode;
    style?: CSSProperties;
}

const Item = (props: ItemProps) => {
  const { children, prefix='ant-', style, className,icon, ...others} = props;
  const cls = classNames({
    [`${prefix}menu-item`]: true,
    [`${prefix}menu-item-selected`]: true,
    [className as string]: !!className
});
  const iconEle = React.isValidElement(icon) ? React.cloneElement(icon, {
    className: `${prefix}menu-item-icon`
  }) : null;

  return <li {...others} className={cls} style={style}>
    {iconEle}
    <span>{children}</span>
    </li>
}

export default Item ;