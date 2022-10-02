import React, { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';
// （1）传入一个对象：classnames({class1:true,class2:false}) ，
// true表示相应的class生效，反之false表示不生效。
//（2）接受多个类名：classnames(class1,class2,{ class3:false })
import classNames from 'classnames';

import './index.scss';

type autoSizeType = {
  minRows: number;
  maxRows: number;
}

export interface InputProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  defaultValue?: string;
  value?: string;
  onChange?: (event: React.FormEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
  style?: CSSProperties;
  maxLength?: number;
  showCount?: boolean;
  autoSize?: boolean | autoSizeType;
  children?: ReactNode;
  prefix?: any;
}

const hiddenStyle: CSSProperties = {
  visibility: 'hidden',
  position: 'absolute',
  zIndex: '-1000',
  top: '-1000px',
  overflowY: 'hidden',
  left: 0,
  right: 0,
};


const TextArea = (props: InputProps) => {
  const { style, prefix = null, autoSize, className, showCount, defaultValue, value: pValue, onChange, ...others} = props;
  const [value, setValue] = useState(defaultValue || pValue || '');
  const [height, setHeight] = useState(0);
  const textareaRef = useRef<any>(null);
  const fakeRef = useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    if (typeof autoSize === 'object') {
      const { minRows, maxRows } = autoSize;
      const fakeNode = fakeRef.current;
      fakeNode?.setAttribute('rows', minRows as any);
      const minHeight = fakeNode?.clientHeight;

      fakeNode?.setAttribute('rows', maxRows as any);
      const maxHeight = fakeNode?.clientHeight;

      textareaRef.current.setAttribute('style',
        `min-height: ${minHeight}px; max-height: ${maxHeight}px; overflow: scroll`
      )
      fakeNode?.setAttribute('rows', 1 as any);
    }

  }, [])

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
      const value = e.target.value;
      setValue(value);
      if (autoSize) {
        const fakeNode = fakeRef.current;
        fakeNode!.value = value;
        const height = fakeNode?.scrollHeight as number;
        setHeight(height);
      }
    }
    onChange?.(e);
  }
  const wrapperCls = classNames({
    'ant-input-textarea': true,
    'ant-input-textarea-show-count': showCount,
  });
  const newStyle: CSSProperties = {};
  if (height) {
    newStyle.height = height;
  }

  const textarea = <textarea 
    {...others} 
    className={cls} 
    value={value} 
    onChange={handleChange} 
    ref={textareaRef}
    style={{...style, ...newStyle}}
  />;

  if (props.showCount) {
    return <span className={wrapperCls} data-count={`${value.length} / ${props.maxLength}`}>
      {textarea}
    </span>
  }
  return <>
    {textarea}
    {
      autoSize ? <textarea className={cls} ref={fakeRef} data-fade style={hiddenStyle} /> : null
    }
  </>
}

export default TextArea ;