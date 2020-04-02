const { findFirstStringInBracket } = require("./stringUtil.js");

const cases = [
  {
    name: "Regular",
    input: "Hello, (wor)ld!",
    expectedOutput: "wor"
  },
  {
    name: "Reversed",
    input: "Hello, )wor(ld!",
    expectedOutput: ""
  },
  {
    name: "OpenOnly",
    input: "Hello, (world!",
    expectedOutput: ""
  },
  {
    name: "CloseOnly",
    input: "Hello, wor)ld!",
    expectedOutput: ""
  },
  {
    name: "EmptyQuote",
    input: "Hello, wor()ld!",
    expectedOutput: ""
  },
  {
    name: "MultipleBrackets",
    input: "(Hello, (wor)ld)!",
    expectedOutput: "Hello, (wor"
  },
  {
    name: "MultipleWords",
    input: "(Hell)o, (wor)ld!",
    expectedOutput: "Hell"
  }
];

describe("Test findFirstStringInBracket", () => {
  cases.forEach(c => {
    it(c.name, () => {
      const output = findFirstStringInBracket(c.input);
      expect(output).toBe(c.expectedOutput);
    });
  });
});
