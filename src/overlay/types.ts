import { POSITION_POINTS } from './const';

export type PlacementType = 'topLeft' | 'top' | 'topRight' | 'leftTop' | 'left' | 'leftBottom' | 'rightTop' | 'right' | 'rightBottom' | 'bottomLeft' | 'bottom' | 'bottomRight';


export type PointType =  POSITION_POINTS.TOP_LEFT | POSITION_POINTS.TOP_CENTER | POSITION_POINTS.TOP_RIGHT | POSITION_POINTS.BOTTOM_LEFT | POSITION_POINTS.BOTTOM_CENTER | POSITION_POINTS.BOTTOM_RIGHT | POSITION_POINTS.LEFT_TOP | POSITION_POINTS.LEFT_CENTER | POSITION_POINTS.LEFT_BOTTOM 