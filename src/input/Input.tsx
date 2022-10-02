import React, { CSSProperties, ReactNode, useEffect, useState } from 'react';
// （1）传入一个对象：classnames({class1:true,class2:false}) ，
// true表示相应的class生效，反之false表示不生效。
//（2）接受多个类名：classnames(class1,class2,{ class3:false })
import classNames from 'classnames';

import './index.scss';

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  defaultValue?: string;
  value?: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  placeholder?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  style?: CSSProperties;
  maxLength?: number;
  prefix?: any;
}


const Input = (props: InputProps) => {
  const { size = 'medium', style, prefix = null, className, defaultValue, value: pValue, onChange, ...others} = props;
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
  const wrapperCls = classNames({
    'ant-input-affix-wrapper': true,
    'ant-input-affix-wrapper-lg': size === 'large',
    'ant-input-affix-wrapper-sm': size === 'small',
  });
  const input = <input {...others} className={cls} value={value} onChange={handleChange} />;

  if (props.maxLength || prefix) {
    return <span className={wrapperCls}>
      {prefix ? <span className="ant-input-prefix">
        {prefix}
      </span> : null}
      {input}
      {props.maxLength ? <span className="ant-input-suffix">
        <span className="ant-input-show-count-suffix">{value.length} / {props.maxLength}</span>
      </span> : null}
    </span>
  }

  return input;
}

export default Input ;