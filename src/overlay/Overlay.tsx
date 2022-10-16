import React, { CSSProperties, useEffect, ReactNode, useState, ReactElement, useRef, useCallback } from 'react';
// （1）传入一个对象：classnames({class1:true,class2:false}) ，
// true表示相应的class生效，反之false表示不生效。
//（2）接受多个类名：classnames(class1,class2,{ class3:false })

import './index.scss';
import ReactDOM from 'react-dom';
import useListener from './hooks/useListener';

export interface overlayProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  hasMask?: boolean;
  visible?: boolean;
  onVisibleChange?: Function;
  style?: CSSProperties;
  target?: HTMLElement | (() => HTMLElement);
  points?: PointsType;
  placement?: PlacementType;
  beforePosition?: Function;
}

const Overlay = (props: overlayProps) => {
  const { children, hasMask = true, target, visible: pvisible, onVisibleChange, style, className, ...others} = props;
  const [visible, setVisible] = useState( pvisible || false);
  const [positionStyle, setPositionStyle] = useState({});
  const overlayRef = useRef(null);

  useEffect(() => {
    if ('visible' in props) {
      setVisible(!!pvisible);
    }
  }, [pvisible]);

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

   const handleKeyDown = (e: any) => {
    if (!visible || !overlayRef.current) {
      return;
    }
    if (e.keyCode === 27) {
      onVisibleChange?.(false);
    }
  }

   useListener(window, 'mousedown', handleMouseDown, visible);
   useListener(window, 'keydown', handleKeyDown, visible);

    // 弹窗挂载，第一次 mount node=真实dom，卸载的时候 node=null
  const overlayRefCallback = useCallback((node: any) => {
    overlayRef.current = node;

    if (node && target) {
      const targetElement = typeof target === 'function' ? target() : target;
      // const positionStyle = getPlacement({
      //   target: targetElement, 
      //   overlay: node, 
      //   points,
      //   placement,
      //   beforePosition
      // });
      setPositionStyle(positionStyle);
    }

  }, []);

   const child: ReactElement | undefined = React.Children.only(children);

   const newChildren = React.cloneElement(child, {
     ...others,
     ref: overlayRefCallback,
     style: { ...positionStyle, ...child?.props?.style }
   });
 

  if (!visible) { 
    return null;
  }

  return ReactDOM.createPortal(<div ref={overlayRef}>
    {hasMask ? <div /> : null}
    {children}
  </div>, document.body);
}

export default Overlay ;