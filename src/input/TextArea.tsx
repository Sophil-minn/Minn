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


const TextArea = (props: InputProps) => {
  const { style, prefix = null, autoSize, className, showCount, defaultValue, value: pValue, onChange, ...others} = props;
  const [value, setValue] = useState(defaultValue || pValue || '');
  const [height, setHeight] = useState(0);
  const textareaRef = useRef<any>(null);

  React.useEffect(() => {
    if (typeof autoSize === 'object') {
      const { minRows, maxRows } = autoSize;
      const styles = window.getComputedStyle(textareaRef.current)
      const height = parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom) +
        parseFloat(styles.borderTopWidth) + parseFloat(styles.borderBottomWidth);

      const minHeight = minRows * parseFloat(styles.lineHeight);
      const maxHeight = maxRows * parseFloat(styles.lineHeight);

      textareaRef.current.setAttribute('style',
        `min-height: ${minHeight}px; max-height: ${maxHeight}px;`
      )
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
      setValue(e.target.value);
      if (autoSize) {
        let line = value.split('\n').length;
        if (line < 2) line = 2;

        const styles = window.getComputedStyle(textareaRef.current)
        const height = parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom) +
          parseFloat(styles.borderTopWidth) + parseFloat(styles.borderBottomWidth);

        const contentHeight = line * parseFloat(styles.lineHeight);

        const totalHeight = height + contentHeight;
        setHeight(totalHeight);
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
  return textarea;
}

export default TextArea ;