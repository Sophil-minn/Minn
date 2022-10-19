import React, { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';
// （1）传入一个对象：classnames({class1:true,class2:false}) ，
// true表示相应的class生效，反之false表示不生效。
//（2）接受多个类名：classnames(class1,class2,{ class3:false })
import classNames from 'classnames';

import './index.scss';
import ReactDOM from 'react-dom';
import { useListener } from './hooks/useListener';

export interface overlayProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
  hasMask?: boolean;
  visible?: boolean;
  target?: HTMLElement | (() => HTMLElement);
  onVisibleChange?: Function;
}

const Overlay = (props: overlayProps) => {
  const { 
    children, 
    hasMask = true, 
    visible: pvisible, 
    style, 
    className, 
    onVisibleChange,
    target,
    ...others} = props;
  const [visible, setVisible] = useState(pvisible || false);
  const [positionStyle, setPositionStyle] = useState({});
  const overlayRef = useRef(null);

  useEffect(() => {
    if ('visible' in props) {
      setVisible(pvisible as boolean);
    }
  }, [pvisible]);

  const cls = classNames({
    'ant-overlay': true,
    [className as string]: !!className
  });
  
  const handleMouseDown = (e: any) => {

    const safeNodeList: any[] = [];
    // 弹窗默认为安全节点
    if (overlayRef.current) {
      safeNodeList.push(overlayRef.current);
    }

    const clickNode = e.target;

    for (let index = 0; index < safeNodeList.length; index++) {
      const node = safeNodeList[index];
      if (node && node.contains(clickNode)) {
        return;
      }
    }

    onVisibleChange?.(false);
  }

  useListener(window, 'mousedown', handleMouseDown, visible);

  const handleKeyDown = (e: any) => {
    if (!visible || !overlayRef.current) {
      return;
    }
    if (e.keyCode === 27) {
      onVisibleChange?.(false);
    }
  }

  useListener(window, 'keydown', handleKeyDown, visible);

  if (!visible) {
    return null;
  }

  return ReactDOM.createPortal(<div >
    {hasMask ? <div /> : null}
    {children}
  </div>, document.body);
}

export default Overlay ;