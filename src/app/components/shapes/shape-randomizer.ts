export type ShapeType =
  | 'stick'
  | 'candy'
  | 'ball'
  | 'square'
  | 'star'
  | 'triangle'
  | 'heart'
  | 'diamond'
  | 'pentagon'
  | 'hexagon'
  | 'octagon'
  | 'moon'
  | 'cloud'
  | 'apple'
  | 'banana'
  | 'cherry'
  | 'grape'
  | 'lemon'
  | 'orange'
  | 'pear'
  | 'watermelon';

const SHAPES: ShapeType[] = [
  'stick',
  'candy',
  'ball',
  'square',
  'star',
  'triangle',
  'heart',
  'diamond',
  'pentagon',
  'hexagon',
  'octagon',
  'moon',
  'cloud',
  'apple',
  'banana',
  'cherry',
  'grape',
  'lemon',
  'orange',
  'pear',
  'watermelon',
];

export function getRandomShape(): ShapeType {
  const idx = Math.floor(Math.random() * SHAPES.length);
  return SHAPES[idx];
}
