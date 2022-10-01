import React, { CSSProperties, ReactNode, useRef, useState } from 'react';
// （1）传入一个对象：classnames({class1:true,class2:false}) ，
// true表示相应的class生效，反之false表示不生效。
//（2）接受多个类名：classnames(class1,class2,{ class3:false })
import classNames from 'classnames';

import './index.scss';
import Radio from './index';
import { InputType } from 'zlib';

export interface RadioProps extends React.HTMLAttributes<HTMLInputElement> {
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  /**
   * 禁用
   */
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

const RadioGroup = (props: RadioProps) => {
  const {disabled, className, children, style, onChange, ...others} = props;
  const cls = classNames({
    'ant-radio-group': true
  });

  const [value, setValue] = useState(props.defaultValue || props.value);
  
  const handleClick = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setValue(value);
  } 

  const newChildren = React.Children.map(children, (child:any) => {
      if (child.type !== Radio) {
          return null;
      }
      return React.cloneElement(child, {
          checked: child.props.value === value,
          disabled: disabled,
          onChange: handleClick,
      });
  })


  return (
    <span className={cls} {...others}>
        <span>{newChildren}</span>
    </span>
  );
}

export default RadioGroup ;