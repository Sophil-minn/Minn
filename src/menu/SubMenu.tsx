import React, { CSSProperties, ReactNode } from 'react';
// （1）传入一个对象：classnames({class1:true,class2:false}) ，
// true表示相应的class生效，反之false表示不生效。
//（2）接受多个类名：classnames(class1,class2,{ class3:false })
import classNames from 'classnames';

import './index.scss';

export interface SubMenuProps {
  className?: string;
  type?: 'normal' | 'primary' | 'dashed' | 'link' | 'text';
  size?: 'small' | 'medium' | 'large';
  mode?: 'vertical' | 'horizontal' | 'inline';
  icon?: ReactNode;
  title?: ReactNode;
  id?: string;
  children?: ReactNode;
  style?: CSSProperties;
  isOpen?: boolean;
  isSelected?: boolean;
}

const SubMenu = (props: SubMenuProps) => {
  const {
    className,
    id,
    title,
    icon,
    children,
    style,
    mode = "vertical",
    isOpen = true,
    isSelected = true,
    ...others
  } = props;
  const cls = classNames({
    'ant-menu-submenu': true,
    [`ant-menu-submenu-${mode}`]: true,
    'ant-menu-submenu-open': isOpen,
    'ant-menu-submenu-selected': isSelected,
    [className as string]: !!className
  });
  const subcls = classNames({
    'ant-menu': true,
    'ant-menu-sub': true,
    'ant-menu-hidden': !isOpen,
    [`ant-menu-${mode}`]: true,
  })

  const handleClick = (e: any) => {
    e.stopPropagation();
    // onOpenChange?.(id);
  }
  const itemStyle = {
    // paddingLeft: level * inlineIndent,
  };

  const iconEle = React.isValidElement(icon) ? React.cloneElement(icon, {
    className: "ant-menu-item-icon"
  }) : null;

  return  <li {...others} className={cls} style={style} onClick={handleClick}>
  <div className="ant-menu-submenu-title" style={itemStyle}>
      {iconEle}
      <span className="ant-menu-title-content">{title}</span>
      <i className="ant-menu-submenu-arrow" />
  </div>
  <ul className={subcls} >
      {children}
  </ul>
</li>
}

export default SubMenu ;