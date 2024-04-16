import analyzeArray from "../modules/analyzeArray";

test("test a positive array", () => {
  expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6})
})
test("test negative array", () => {
  expect(analyzeArray([-1,-8,-3,-4,-2,-6])).toEqual({average: -4, min: -8, max: -1, length: 6})
})
test("test positive and negative array", () => {
  expect(analyzeArray([-1,-8, 3,-4,-2,-6])).toEqual({average: -3, min: -8, max: 3, length: 6})
})
test("test empty array", () => {
  expect(analyzeArray([])).toEqual({average: null, min: null, max: null, length: 0})
})