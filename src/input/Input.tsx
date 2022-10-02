import React, { CSSProperties, useEffect, useState } from 'react';
// （1）传入一个对象：classnames({class1:true,class2:false}) ，
// true表示相应的class生效，反之false表示不生效。
//（2）接受多个类名：classnames(class1,class2,{ class3:false })
import classNames from 'classnames';

import './index.scss';

export interface inputProps extends React.HTMLAttributes<HTMLInputElement> {
  defaultValue?: string;
  value?: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  placeholder?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  style?: CSSProperties;
}


const Input = (props: inputProps) => {
  const { size = 'medium', style, className, defaultValue, value: pValue, onChange, ...others} = props;
  const [value, setValue] = useState(defaultValue || pValue || '');

  useEffect(() => {
    if ('value' in props) {
      setValue(pValue as string)
    }
  }, [pValue])
  const cls = classNames({
    'ant-input': true,
    'ant-input-lg': size === 'large',
    'ant-input-sm': size === 'small'
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!('value' in props)) {
      setValue(e.target.value);
    }
    onChange?.(e);
  }
  return <input {...others} onChange={handleChange} className={cls} style={style} value={value} />
}

export default Input ;