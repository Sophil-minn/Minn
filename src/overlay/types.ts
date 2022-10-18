import { TOP, LEFT, RIGHT, BOTTOM, CENTER } from './const';

const TOP_LEFT = [TOP, LEFT];
const TOP_CENTER = [TOP, CENTER];
const TOP_RIGHT = [TOP, RIGHT];
const BOTTOM_LEFT = [BOTTOM, LEFT];
const BOTTOM_CENTER = [BOTTOM, CENTER];
const BOTTOM_RIGHT = [BOTTOM, RIGHT];

const LEFT_TOP = [LEFT, TOP];
const LEFT_CENTER = [LEFT, CENTER];
const LEFT_BOTTOM = [LEFT, BOTTOM];
const RIGHT_TOP = [RIGHT, TOP];
const RIGHT_CENTER = [RIGHT, CENTER];
const RIGHT_BOTTOM = [RIGHT, BOTTOM];

enum Direction {
  TOP_LEFT,
  TOP_CENTER,
  TOP_RIGHT,
  BOTTOM_LEFT,
  BOTTOM_CENTER,
  BOTTOM_RIGHT,
  LEFT_TOP,
  LEFT_CENTER,
  LEFT_BOTTOM
};


// type point = 'tl' | 'tc' | 'tr' | 'cl' | 'cc' | 'cr' | 'bl' | 'bc' | 'br';
export type PointsType = [Direction, Direction];

export type PlacementType = 'topLeft' | 'top' | 'topRight' | 'leftTop' | 'left' | 'leftBottom' | 'rightTop' | 'right' | 'rightBottom' | 'bottomLeft' | 'bottom' | 'bottomRight';


// export type PointsType =  typeof TOP_LEFT | typeof TOP_CENTER | typeof TOP_RIGHT | typeof BOTTOM_LEFT | typeof BOTTOM_CENTER | typeof BOTTOM_RIGHT | typeof LEFT_TOP | typeof LEFT_CENTER | typeof LEFT_BOTTOM;
