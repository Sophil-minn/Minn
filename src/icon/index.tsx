import React, { ReactNode } from 'react';
// （1）传入一个对象：classnames({class1:true,class2:false}) ，
// true表示相应的class生效，反之false表示不生效。
//（2）接受多个类名：classnames(class1,class2,{ class3:false })
import classNames from 'classnames';

import './index.scss';

interface iconProps extends React.HTMLAttributes<SVGElement> {
  className?: string;
  type?: 'fixed';
  size?: number;
}

const svgMap = {
  fixed: <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="805"></svg>
}

const Icon = (props: iconProps) => {
  const { className, size='normal', type = 'fixed', ...others} = props;
  const cls = classNames({
    'ant-icon': true,
    [`ant-icon-${size}`]: size,
    [`ant-icon-${type}`]: type,
    [className as string]: !!className
  });
  if (type in svgMap) {
    return svgMap[type];
  }
  return <i />
}

export default Icon;