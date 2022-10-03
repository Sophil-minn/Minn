import React, { CSSProperties, ReactNode, useEffect, useState } from 'react';
// （1）传入一个对象：classnames({class1:true,class2:false}) ，
// true表示相应的class生效，反之false表示不生效。
//（2）接受多个类名：classnames(class1,class2,{ class3:false })
import classNames from 'classnames';

import './index.scss';

export interface SwitchProps {
  className?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  checkedChildren?: ReactNode;
  unCheckedChildren?: ReactNode;
  size?: 'small' | 'medium';
  style?: CSSProperties;
}

const Switch = (props: SwitchProps) => {
  const { className, disabled, defaultChecked, checked: pchecked, style,
    checkedChildren,
    unCheckedChildren,
    onChange,
    ...others } = props;

  const [checked, setChecked] = useState(defaultChecked || pchecked || false);
  useEffect(() => {
    if ('checked' in props) {
        setChecked(pchecked as boolean);
    }
  }, [pchecked])

  const handleClick = () => {
      if (disabled) {
        return;
      }
      if (!('checked' in props)) {
          setChecked(!checked);
      }
      onChange?.(!checked);
  }
  const cls = classNames({
    'ant-switch': true,
    'ant-switch-checked': checked,
    'ant-switch-disabled': disabled,
    [className as string]: !!className
  })

  return (<button
    {...others}
    type="button"
    role="switch"
    aria-checked="true"
    className={cls}
    onClick={handleClick}
    style={style}
>
    <div className="ant-switch-handle"></div>
    <span className="ant-switch-inner"> {
        checked ? checkedChildren : unCheckedChildren
    }</span>
</button>)  
}

export default Switch ;