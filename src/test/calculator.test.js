import calculator from '../modules/calculator';

test("Adding two numbers", ()=>{
  expect(calculator.add(1,1)).toBe(2);
});
test("Adding one negative number", () => {
  expect(calculator.add(-1,1)).toBe(0);
});
test("Adding one negative number v.2", () => {
  expect(calculator.add(1,-1)).toBe(0);
});
test("Adding two negative number", () => {
  expect(calculator.add(-1,-1)).toBe(-2);
})

test("Subtracting two numbers", () => {
  expect(calculator.subtract(1,1)).toBe(0);
})
test("Subtracting a negative number", () => {
  expect(calculator.subtract(1,-1)).toBe(2);
})
test("Negative number subtract a negative number", () => {
  expect(calculator.subtract(-1,-1)).toBe(0);
})

test("Multiply two numbers", () => {
  expect(calculator.multiply(10,10)).toBe(100);
})
test("Multiply by a zero", () => {
  expect(calculator.multiply(10,0)).toBe(0);
})
test("Multiply by a 1", () => {
  expect(calculator.multiply(10,1)).toBe(10);
})
test("Multiply by a negative number", () => {
  expect(calculator.multiply(10,-1)).toBe(-10);
})

test("Divide a number", () => {
  expect(calculator.divide(250,50)).toBe(5);
})
test("Divide by 1", () => {
  expect(calculator.divide(250,1)).toBe(250);
})
test("Dividend is smaller than divisor", () => {
  expect(calculator.divide(50,250)).toBe(0.2);
})
test("Divide by 0", () => {
  expect(() => calculator.divide(100, 0)).toThrow("Division by zero is not allowed");
})