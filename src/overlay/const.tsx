export const TOP = 'top';
export const RIGHT = 'right';
export const LEFT = 'left';
export const BOTTOM = 'bottom';
export const CENTER = 'center';

// export const TOP_LEFT = [TOP, LEFT];
// export const TOP_CENTER = [TOP, CENTER];
// export const TOP_RIGHT = [TOP, RIGHT];
// export const BOTTOM_LEFT = [BOTTOM, LEFT];
// export const BOTTOM_CENTER = [BOTTOM, CENTER];
// export const BOTTOM_RIGHT = [BOTTOM, RIGHT];

// export const LEFT_TOP = [LEFT, TOP];
// export const LEFT_CENTER = [LEFT, CENTER];
// export const LEFT_BOTTOM = [LEFT, BOTTOM];
// export const RIGHT_TOP = [RIGHT, TOP];
// export const RIGHT_CENTER = [RIGHT, CENTER];
// export const RIGHT_BOTTOM = [RIGHT, BOTTOM];


export const POSITION_COORDINATES = {
  topLeft: [BOTTOM_LEFT, TOP_LEFT],
  top: [BOTTOM_CENTER, TOP_CENTER],
  topRight: [BOTTOM_RIGHT, TOP_RIGHT],
  bottomLeft: [TOP_LEFT, BOTTOM_LEFT],
  bottom: [TOP_CENTER, BOTTOM_CENTER],
  bottomRight: [TOP_RIGHT, BOTTOM_RIGHT],
  leftTop: [RIGHT_TOP, LEFT_TOP],
  left: [RIGHT_CENTER, LEFT_CENTER],
  leftBottom: [RIGHT_BOTTOM, LEFT_BOTTOM],
  rightTop: [LEFT_TOP, RIGHT_TOP],
  right: [LEFT_CENTER, RIGHT_CENTER],
  rightBottom: [LEFT_BOTTOM, RIGHT_BOTTOM],
};