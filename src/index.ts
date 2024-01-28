const CHARSET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export function encode(input: string) {
  let source = input.split('').map(c => c.charCodeAt(0));
  let result = '';
  while (source.length > 0) {
      let remainder = 0;
      let nextSource: number[] = [];
      source.forEach((byte) => {
          let accumulator = byte + remainder * 256;
          let digit = Math.floor(accumulator / 62);
          remainder = accumulator % 62;
          if (nextSource.length > 0 || digit > 0) {
              nextSource.push(digit);
          }
      });
      result = CHARSET[remainder] + result;
      source = nextSource;
  }
  return result;
}

export function decode(encoded: string) {
    let source = encoded.split('').map(c => CHARSET.indexOf(c));
    let result = '';
    while (source.length > 0) {
      let remainder = 0;
      let nextSource: number[] = [];
      source.forEach((digit) => {
          let accumulator = digit + remainder * 62;
          let byte = Math.floor(accumulator / 256);
          remainder = accumulator % 256;
          if (nextSource.length > 0 || byte > 0) {
              nextSource.push(byte);
          }
      });
      result = String.fromCharCode(remainder) + result;
      source = nextSource;
  }
  return result;
}
