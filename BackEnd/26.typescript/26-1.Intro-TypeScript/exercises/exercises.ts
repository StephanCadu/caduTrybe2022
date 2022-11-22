export function getSquareArea(side: number): number {
  return side ** 2;
};

export const getRectangleArea = (base: number, height: number): number => {
  return base * height;
};

export const getTriangleArea = (base: number, height: number): number => {
  return (base * height) / 2;
};

export function getPolygonPerimeter(sides: number[]): number {
  return sides.reduce((acc, side) => acc + side, 0);
};

export const triangleCheck = (sideA: number, sideB: number, sideC: number) => {
  const checkA = Math.abs(sideB - sideC) < sideA && (sideB + sideC) > sideA;
  const checkB = Math.abs(sideA - sideC) < sideB && (sideA + sideC) > sideB;
  const checkC = Math.abs(sideA - sideB) < sideC && (sideA + sideB) > sideC;
  return checkA && checkB && checkC;
};

export const getLosangleArea = (D: number, d: number): number => {
  return (D * d) / 2;
};

export const getTrapezeArea = (B: number, b: number, h: number): number => {
  return ((B + b) * h) / 2;
};

export const getCircleArea = (r: number): number => {
  const pi: number = 3.14;
  return pi * (r ** 2);
};