import { encode, decode } from "./index";

it('encodes and decodes as expeted', () => {
  const input1 = "123";
  const encoded1 = "DWjr";
  expect(encode(input1)).toBe(encoded1);
  expect(decode(encoded1)).toBe(input1);

  const input2 = "Hello base62!";
  const encoded2 = "1wJfrzvcbONagqly0f";
  expect(encode(input2)).toBe(encoded2);
  expect(decode(encoded2)).toBe(input2);

  const input3 = "happy encoding...";
  const encoded3 = "D7GdLy4KObUFZUbTFSP0C6w";
  expect(encode(input3)).toBe(encoded3);
  expect(decode(encoded3)).toBe(input3);
});