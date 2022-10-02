import React, { CSSProperties, ReactNode, useEffect, useState } from 'react';
// （1）传入一个对象：classnames({class1:true,class2:false}) ，
// true表示相应的class生效，反之false表示不生效。
//（2）接受多个类名：classnames(class1,class2,{ class3:false })
import classNames from 'classnames';

import './index.scss';

export interface InputProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  defaultValue?: string;
  value?: string;
  onChange?: (event: React.FormEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
  style?: CSSProperties;
  maxLength?: number;
  showCount?: boolean;
  children?: ReactNode;
  prefix?: any;
}


const TextArea = (props: InputProps) => {
  const { style, prefix = null, className, showCount, defaultValue, value: pValue, onChange, ...others} = props;
  const [value, setValue] = useState(defaultValue || pValue || '');

  useEffect(() => {
    if ('value' in props) {
      setValue(pValue as string)
    }
  }, [pValue])
  const cls = classNames({
    'ant-input': true,
  });
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!('value' in props)) {
      setValue(e.target.value);
    }
    onChange?.(e);
  }
  const wrapperCls = classNames({
    'ant-input-textarea': true,
    'ant-input-textarea-show-count': showCount,
  });
  const textarea = <textarea {...others} className={cls} value={value} onChange={handleChange} />;

  if (props.showCount) {
    return <span className={wrapperCls} data-count={`${value.length} / ${props.maxLength}`}>
      {textarea}
    </span>
  }
  return textarea;
}

export default TextArea ;