import {capitalize} from "../modules/capitalize";

test("Capitalize first letter", () =>{
  expect(capitalize("jeremy")).toBe("Jeremy");
});

test("Capitalize 1 letter", () => {
  expect(capitalize("a")).toBe("A");
});

test("Do nothing when no letters", ()=>{
  expect(capitalize("")).toBe("");
});