import React, { CSSProperties, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
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

  const wraperRef = useRef<any>(null);
  const fixedRef = useRef<any>(null);

  function updatePosition() {
    const { top, width, height } = wraperRef?.current.getBoundingClientRect();
    console.log(wraperRef?.current.getBoundingClientRect(), 'wraperRef?.current.getBoundingClientRect()');
    if (offsetTop) {
      if (top <= offsetTop && !affixed) {
        setWrapperStyle({
            width,
            height
        });
        setAffixed(true);
      } else if (top > offsetTop) {
          setAffixed(false);
          fixedRef.current.setAttribute('style', null);
      }
    }
  }

  useEffect(() => {
    const wraperNode = wraperRef.current;
    if (!wraperNode) {
        return;
    }
    window.addEventListener('scroll', updatePosition, false)
    return () => {
        window.removeEventListener('scroll', updatePosition, false)
    }
  }, [])
  
  const cls = classNames({
    'ant-affix': affixed,
    [className as string]: !!className
  });
  return <div ref={wraperRef} {...others}>
        {affixed ? <div style={wraperStyle} /> : null}
        <div style={affixed ? {
            top: offsetTop,
            ...wraperStyle
        } : null} ref={fixedRef} className={cls}>
            {children}
        </div>
    </div>;
}

export default Affix ;