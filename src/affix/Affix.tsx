import React, { CSSProperties, ReactNode, useCallback, useState } from 'react';
// （1）传入一个对象：classnames({class1:true,class2:false}) ，
// true表示相应的class生效，反之false表示不生效。
//（2）接受多个类名：classnames(class1,class2,{ class3:false })
import classNames from 'classnames';

import './index.scss';

export interface affixProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
  offsetTop?: number;
}

const Affix = (props: affixProps) => {
  const { children, style, className, offsetTop, ...others} = props;
  const [wraperStyle, setWrapperStyle] = useState<any>(null);
  const [affixed, setAffixed] = useState(false);

  const wraperRefCB = useCallback((node: HTMLDivElement) => {
    if (!node) return;
    function updatePosition() {
        const { top, width, height } = node.getBoundingClientRect();
        if (offsetTop) {
          if (top <= offsetTop && !affixed || 
            (affixed && 
                (width !== wraperStyle.width || height !== wraperStyle.height))) {
            setWrapperStyle({
                width,
                height
            });
            setAffixed(true);
          } else if (top > offsetTop) {
              setAffixed(false);
          }
        }
        
    }
    window.addEventListener('scroll', updatePosition, false);

    const ob = new ResizeObserver(updatePosition);
    ob.observe(node);
  }, [])
  
  // const cls = classNames({
  //   'ant-affix': true,
  //   [className as string]: !!className
  // });
  return <div ref={wraperRefCB} >
        {affixed ? <div style={wraperStyle} /> : null}
        <div style={affixed ? {
            position: 'fixed',
            top: offsetTop,
            ...wraperStyle
        } : null}>
            {children}
        </div>
    </div>;
}

export default Affix ;