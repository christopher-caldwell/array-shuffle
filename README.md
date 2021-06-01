# Array Shuffle

Dead simple array shuffling

<p align="center">
  <h4/>
  <a href='https://www.npmjs.com/package/@caldwell619/array-shuffle'>
    <img src="https://img.shields.io/npm/v/@caldwell619/array-shuffle">
  </a>
  <a href='https://bundlephobia.com/result?p=@caldwell619/array-shuffle'>
    <img src="https://img.shields.io/bundlephobia/min/@caldwell619/array-shuffle">
  </a>
  <img src="https://codecov.io/gh/christopher-caldwell/array-shuffle/branch/master/graph/badge.svg?token=2LA7ETDPO3">
  <img src="https://img.shields.io/github/last-commit/christopher-caldwell/array-shuffle">
  <img src="https://img.shields.io/npm/types/@caldwell619/array-shuffle">
</p>

## Installation

```bash
# Yarn
yarn add @caldwell619/array-shuffle

# NPM
npm install --save @caldwell619/array-shuffle
```

## Usage

1 main utility is exposed:

```ts
import { shuffle } from '@caldwell619/array-shuffle'

const shuffledArray = shuffle([1, 2, 3]) // [3,2,1] or [2,1,3] or [3,1,2]
```
