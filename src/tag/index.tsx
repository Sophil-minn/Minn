import React, { ReactNode, useState } from 'react';
// （1）传入一个对象：classnames({class1:true,class2:false}) ，
// true表示相应的class生效，反之false表示不生效。
//（2）接受多个类名：classnames(class1,class2,{ class3:false })
import classNames from 'classnames';
import { CloseOutlined } from '@ant-design/icons';

import './index.scss';

interface tagProps extends React.HtmlHTMLAttributes<HTMLElement> {
  className?: string;
  closable?: boolean;
  color?: string;
  visible?: boolean;
  onClose?: Function;
}


const Tag = (props: tagProps) => {
  const { 
    className,  
    children, 
    closable, 
    color,
    onClose,
    ...others
  } = props;
  const [visible, setVisible] = useState<boolean>(true);

  React.useEffect(() => {
    if ('visible' in props && typeof props.visible !== 'undefined') {
      setVisible(props.visible);
    }
  }, [props.visible]);
  const customColor = color && color.match(/^#/);
  const cls = classNames({ 
    'ant-tag': true,
    [`ant-tag-${color}`]: color && !customColor,
    [className as string]: !!className
  });

  const style: React.CSSProperties = {...props.style};
  if (customColor) {
    style.backgroundColor = color;
  }

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    onClose?.(e);
    if (e.defaultPrevented) {
      return;
    }
    if (!('visible' in props)) {
      setVisible(false);
    }
  }
  if (!visible) {
    return null;
  }
  return <span {...others} className={cls} style={style}>
    {children}
    {closable ? <CloseOutlined
      onClick={handleClick}
     />: null}
    
    </span>
}

export default Tag;