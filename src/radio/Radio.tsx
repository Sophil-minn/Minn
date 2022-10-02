import React, { CSSProperties, ReactNode, useRef, useState, useContext } from 'react';
// （1）传入一个对象：classnames({class1:true,class2:false}) ，
// true表示相应的class生效，反之false表示不生效。
//（2）接受多个类名：classnames(class1,class2,{ class3:false })
import classNames from 'classnames';

import './index.scss';

export interface radioProps extends React.HTMLAttributes<HTMLInputElement> {
  value?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  /**
   * 禁用
   */
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

const Radio = (props: radioProps) => {
  const {disabled, className, children, style, onChange, value, ...others} = props;

  const [checked, setChecked] = useState(false);
  const inputEl = useRef(null);
  const cls = classNames({
    'ant-radio': true,
    'ant-radio-checked': checked,
    'ant-radio-disabled': disabled,
  });

  const wrapperCls = classNames({
      'ant-radio-wrapper': true,
      'ant-radio-wrapper-disabled': disabled,
  });

  React.useEffect(() => {
    if ('checked' in props && props.checked !== checked) {
        setChecked(props.checked as boolean);
    }
}, [props.checked])

  const handleClick = (e: any) => {
    if (disabled || checked) {
      return;
    }

    if (!('checked' in props)) {
        setChecked(true);
    }

    if (typeof onChange === 'function') {
      e.target = inputEl.current;
      onChange(e);
    }
  }

  return (
    <span className={wrapperCls} onClick={handleClick} {...others}>
        <span className={cls} >
            <input type="radio" className="ant-radio-input" value={value} ref={inputEl}/>
            <span className="ant-radio-inner"></span>
        </span>
        <span>{props.children}</span>
    </span>
  );
}

export default Radio ;