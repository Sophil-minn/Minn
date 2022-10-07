import React, { CSSProperties, useEffect, ReactNode, useState, ReactElement, useRef } from 'react';
// （1）传入一个对象：classnames({class1:true,class2:false}) ，
// true表示相应的class生效，反之false表示不生效。
//（2）接受多个类名：classnames(class1,class2,{ class3:false })

import './index.scss';
import ReactDOM from 'react-dom';

export interface overlayProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  hasMask?: boolean;
  visible?: boolean;
  onVisibleChange?: Function;
  style?: CSSProperties;
  target?: any;
}

const Overlay = (props: overlayProps) => {
  const { children, hasMask = true,  visible: pvisible, onVisibleChange, style, className } = props;
  const [visible, setVisible] = useState( pvisible || false);
  const overlayRef = useRef(null);

  useEffect(() => {
    if ('visible' in props) {
      setVisible(!!pvisible);
    }
  }, [pvisible]);

  useEffect(() => {
    if (visible) {
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
       window.addEventListener('mousedown', handleMouseDown, false);
       return () => {
        window.removeEventListener('mousedown', handleMouseDown, false);
      }
    }
    
  }, [visible, overlayRef.current]);

 


  if (!visible) { 
    return null;
  }

  return ReactDOM.createPortal(<div ref={overlayRef}>
    {hasMask ? <div /> : null}
    {children}
  </div>, document.body);
}

export default Overlay ;