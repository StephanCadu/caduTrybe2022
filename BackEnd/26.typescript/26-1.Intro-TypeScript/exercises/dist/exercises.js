"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCircleArea = exports.getTrapezeArea = exports.getLosangleArea = exports.triangleCheck = exports.getPolygonPerimeter = exports.getTriangleArea = exports.getRectangleArea = exports.getSquareArea = void 0;
function getSquareArea(side) {
    return side ** 2;
}
exports.getSquareArea = getSquareArea;
;
const getRectangleArea = (base, height) => {
    return base * height;
};
exports.getRectangleArea = getRectangleArea;
const getTriangleArea = (base, height) => {
    return (base * height) / 2;
};
exports.getTriangleArea = getTriangleArea;
function getPolygonPerimeter(sides) {
    return sides.reduce((acc, side) => acc + side, 0);
}
exports.getPolygonPerimeter = getPolygonPerimeter;
;
const triangleCheck = (sideA, sideB, sideC) => {
    const checkA = Math.abs(sideB - sideC) < sideA && (sideB + sideC) > sideA;
    const checkB = Math.abs(sideA - sideC) < sideB && (sideA + sideC) > sideB;
    const checkC = Math.abs(sideA - sideB) < sideC && (sideA + sideB) > sideC;
    return checkA && checkB && checkC;
};
exports.triangleCheck = triangleCheck;
const getLosangleArea = (D, d) => {
    return (D * d) / 2;
};
exports.getLosangleArea = getLosangleArea;
const getTrapezeArea = (B, b, h) => {
    return ((B + b) * h) / 2;
};
exports.getTrapezeArea = getTrapezeArea;
const getCircleArea = (r) => {
    const pi = 3.14;
    return pi * (r ** 2);
};
exports.getCircleArea = getCircleArea;
