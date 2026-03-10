export type ShapeType = 'stick' | 'candy' | 'ball' | 'square';

const SHAPES: ShapeType[] = ['stick', 'candy', 'ball', 'square'];

export function getRandomShape(): ShapeType {
  const idx = Math.floor(Math.random() * SHAPES.length);
  return SHAPES[idx];
}
