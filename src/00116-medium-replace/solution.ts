/*
  116 - Replace
  -------
  by Anthony Fu (@antfu) #medium #template-literal

  ### Question

  Implement `Replace<S, From, To>` which replace the string `From` with `To` once in the given string `S`

  For example

  ```ts
  type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'
  ```

  > View on GitHub: https://tsch.js.org/116
*/

/* _____________ Your Code Here _____________ */

/**
 * 思路：模板字符串
 */
type Replace<S extends string, From extends string, To extends string> = From extends ''
    ? S
    : S extends `${From}${infer Rest}`
    ? `${To}${Rest}`
    : S extends `${infer First}${infer Rest}`
    ? `${First}${Replace<Rest, From, To>}`
    : S;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type X = Replace<'foobarbar', '', 'foo'>;

type cases = [
    Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
    Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
    Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
    Expect<Equal<Replace<'foobarbar', 'bar', ''>, 'foobar'>>,
    Expect<Equal<Replace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
    Expect<Equal<Replace<'', '', ''>, ''>>,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/116/answer
  > View solutions: https://tsch.js.org/116/solutions
  > More Challenges: https://tsch.js.org
*/
