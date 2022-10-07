import React, { CSSProperties, useEffect, ReactNode, useState } from 'react';
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
  const { children, hasMask = true,  visible: pvisible, style, className } = props;
  const [visible, setVisible] = useState( pvisible || false);

  useEffect(() => {
    if ('visible' in props) {
      setVisible(!!pvisible);
    }
  }, [pvisible]);

  useEffect(() => {
    if (visible) {
       
    }
  }, [visible]);

  if (!visible) { 
    return null;
  }

  return ReactDOM.createPortal(<div >
    {hasMask ? <div /> : null}
    {children}
  </div>, document.body);
}

export default Overlay ;