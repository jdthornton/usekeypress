# @jdthornton/usekeypress

[![npm (scoped)](https://img.shields.io/npm/v/@jdthornton/usekeypress.svg)](https://www.npmjs.com/package/@jdthornton/usekeypress)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@jdthornton/usekeypress.svg)](https://www.npmjs.com/package/@jdthornton/usekeypress)

React keypress hook.

## Install

```
$ npm install @jdthornton/usekeypress
```

## Usage

```js
import useKeyPress from "@jdthornton/usekeypress";

function App({ isListening, handleClose }){

  // Listens for an 'ESC' key press event if isListening is true
  useKeyPress(isListening ? handleClose : null, 27)

  return null
}
```
