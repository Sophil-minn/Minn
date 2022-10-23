import React, { CSSProperties, ReactElement, ReactNode, useState } from 'react';
// （1）传入一个对象：classnames({class1:true,class2:false}) ，
// true表示相应的class生效，反之false表示不生效。
//（2）接受多个类名：classnames(class1,class2,{ class3:false })
import classNames from 'classnames';
import { Popup } from '../overlay/index';
import { PlacementType } from '../overlay/placement';

import './index.scss';

export interface TooltipProps {
  className?: string;
  type?: 'normal' | 'primary' | 'dashed' | 'link' | 'text';
  size?: 'small' | 'medium' | 'large';
  title?: ReactElement | string;
  children?: ReactElement;
  style?: CSSProperties;
  placement?: PlacementType;
  arrowPointAtCenter?: boolean;
}

const Tooltip = (props: TooltipProps) => {
  const { children, style, arrowPointAtCenter = false,  placement='top', title, className, ...others} = props;
  const [realPlacement, setPlacement] = useState(placement);
  const cls = classNames({
    'ant-tooltip': true,
    [`ant-tooltip-placement-${realPlacement}`]: realPlacement,
    [className as string]: !!className
});

  const overlayContent = (<div className={cls}>
    <div className="ant-tooltip-content">
        <div className="ant-tooltip-arrow">
            <span className="ant-tooltip-arrow-content"></span>
        </div>
        <div className="ant-tooltip-inner">
            {title}
        </div>
    </div>
</div>);

const handleBeforePosition = (position: { left: number; }, {target, placement}: any) => {
  setPlacement(placement);

  if (!arrowPointAtCenter) {
      return position;
  }

  return {
      ...position,
      left: position.left + target.width / 2 - 24,
  }
}

  return <Popup 
  {...others} 
  trigger={children as any}
  triggerType="hover" 
  className={cls} 
  placement={placement}
  beforePosition={handleBeforePosition}
  style={style}>{overlayContent}</Popup>
}

export default Tooltip ;