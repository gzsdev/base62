# Project Objective

The primary goal of this project is to develop a JavaScript-based Base62 encoding library that accurately replicates the functionality and output of well-established Java Base62 libraries, such as [seruco/base62](https://github.com/seruco/base62), and aligns with the standards set by popular online Base62 tools like [base62.js.org](https://base62.js.org/).

## Usage
Installation
```
npm -i @gzs.dev/base62
```

Application
```
import { encode, decode } from "@gzs.dev/base62";

encode("123"); // "DWjr"
decode("DWjr"); // "123"

```

## Background and Motivation

During a hobby project, I faced a need for Base62 encoding. A critical requirement was that the JavaScript implementation should produce an encoded output identical to that of a Java Base62 library for any given input. This consistency was vital for interoperability with other applications relying on Java-based Base62 encoding.

During my quest for an appropriate JavaScript library, I explored several npm packages, including:
- [base62](https://www.npmjs.com/package/base62)
- [@fry/base62](https://www.npmjs.com/package/@fry/base62)
- [@urlpack/base62](https://www.npmjs.com/package/@urlpack/base62)

However, I found that these existing solutions were either limited to numeric inputs or yielded different outputs compared to the Java libraries. The crucial understanding, as elucidated by ChatGPT, is that JavaScript's encoding process requires special handling. This is due to JavaScript strings being UTF-16 encoded, necessitating the conversion of input strings into byte arrays that represent their ASCII character values.

## Project Outcome

To bridge this gap, I have developed this library to facilitate Base62 encoding in JavaScript, with a strong emphasis on ensuring output consistency with Java Base62 encoding libraries. This library is meticulously crafted to serve as a dependable resource in projects where achieving parity with Java-based Base62 encoding outputs is of paramount importance.
