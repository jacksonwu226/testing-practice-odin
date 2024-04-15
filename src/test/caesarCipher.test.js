import caesarCipher from "../modules/caesarCipher";

const cipher = new caesarCipher();

test("encrypt a string of text of shift 0", ()=> {
  expect(cipher.encrypt("wonderful", 0)).toBe("WONDERFUL");
})
test("encrypt a string of text of shift 1", ()=> {
  expect(cipher.encrypt("wonderful", 1)).toBe("XPOEFSGVM");
})

test("encrypt a string of text of shift 25 for wrapping", ()=> {
  expect(cipher.encrypt("wonderful", 25)).toBe("VNMCDQETK");
})
test("encrypt a string with punctuation and numbers", ()=> {
  expect(cipher.encrypt("Hello, I wrote this code in 2024.", 25)).toBe("GDKKN, H VQNSD SGHR BNCD HM 2024.");
})