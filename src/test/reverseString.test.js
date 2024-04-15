import {reverseString} from '../modules/reverseString'

test('Reverse no letters',() => {
  expect(reverseString("")).toBe("");
})

test('Reverse 1 letter', () => {
  expect(reverseString("a")).toBe("a");
})

test("Reverse once", () => {
  expect(reverseString("Batman")).toBe("namtaB");
})

test("Reverse twice", () =>{
  const str = "Batman";
  const reverseStr = reverseString(str);
  expect(reverseString(reverseStr)).toBe(str);
})