import React, { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';
// （1）传入一个对象：classnames({class1:true,class2:false}) ，
// true表示相应的class生效，反之false表示不生效。
//（2）接受多个类名：classnames(class1,class2,{ class3:false })
import classNames from 'classnames';

import './index.scss';

export interface avatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number | 'small' | 'medium' | 'large';
  shape?: 'circle' | 'square';
  src?: string | ReactNode;
  className?: string;
  icon?: React.ReactNode;
  gap?: number;
  children?: ReactNode;
  style?: CSSProperties;
}

const Avatar = (props: avatarProps) => {
  const {  
    size = 'medium',
    shape = 'circle',
    src,
    icon,
    gap,
    children,
    ...others
  } = props;
  
  const [scale, setScale] = useState(1);
  const wraperRef = useRef<HTMLSpanElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const node = textRef.current;
    const wraperNode = wraperRef.current;
      if (!node || !wraperNode) {
        return;
      }
      const wraperWidth = wraperNode.offsetWidth;
      const textWidth = node.offsetWidth;
      const gap = 4;

      const scale = wraperWidth - gap * 2 < textWidth ?
        (wraperWidth - gap * 2) / textWidth : 1;
      setScale(scale);
  }, [])


  const textRefCallback = React.useCallback( (node: any) => {
    if(!node) return;
    const reRender = () => {
      const wraperNode = wraperRef.current;
      if (!node || !wraperNode) {
        return;
      }
      const wraperWidth = wraperNode.offsetWidth;
      const textWidth = node.offsetWidth;
      const gap = 4;

      const scale = wraperWidth - gap * 2 < textWidth ?
        (wraperWidth - gap * 2) / textWidth : 1;
      setScale(scale);
    }

    const ob = new ResizeObserver(reRender);
    ob.observe(node);

  }, [])
  // const textRefCallback = React.useCallback( (node: any) => {
  //   if(!node) return;
  //   const reRender = () => {
  //     const wraperNode = wraperRef.current;
  //     if (!node || !wraperNode) {
  //       return;
  //     }
  //     const wraperWidth = wraperNode.offsetWidth;
  //     const textWidth = node.offsetWidth;
  //     const gap = 4;

  //     const scale = wraperWidth - gap * 2 < textWidth ?
  //       (wraperWidth - gap * 2) / textWidth : 1;
  //     setScale(scale);
  //   }

  //   const ob = new ResizeObserver(reRender);
  //   ob.observe(node);

  // }, [])

  const cls = classNames({
    'ant-avatar': true,
    'ant-avatar-lg': size === 'large',
    'ant-avatar-sm': size === 'small',
    'ant-avatar-icon': icon,
    'ant-avatar-image': src,
    [`ant-avatar-${shape}`]: shape,
  });
  const style = typeof size === 'number' ? {
    width: size,
    height: size,
    lineHeight: `${size}px`,
    fontSize: size / 2,
  } : props.style;

  const textStyle = {
    lineHeight: `${size}px`,
    transform: `scale(${scale}) translateX(-50%)`
  }
  return (
    <span
      className={cls}
      {...others}
      style={style}
      ref={wraperRef}
    >
      {icon ? icon : null}
      {src ? (typeof src === 'string' ? <img src={src} /> : src) : null}
      {children ? (typeof children === 'string' ? <span
        style={textStyle}
        ref={textRefCallback}
        className="ant-avatar-string">{children}</span> : children) : null}
    </span>
  );
}

export default Avatar ;