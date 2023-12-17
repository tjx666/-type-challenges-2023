/*
  298 - Length of String
  -------
  by Pig Fang (@g-plane) #medium #template-literal

  ### Question

  Compute the length of a string literal, which behaves like `String#length`.

  > View on GitHub: https://tsch.js.org/298
*/

/* _____________ Your Code Here _____________ */

/**
 * 思路：使用数组 'length' 变相获取一个数字字面量
 */
type LengthOfString<
    S extends string,
    C extends number[] = [],
> = S extends `${infer First}${infer Rest}` ? LengthOfString<Rest, [...C, 1]> : C['length'];

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type R = LengthOfString<''>;
//   ^?

type cases = [
    Expect<Equal<R, 0>>,
    Expect<Equal<LengthOfString<'kumiko'>, 6>>,
    Expect<Equal<LengthOfString<'reina'>, 5>>,
    Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/298/answer
  > View solutions: https://tsch.js.org/298/solutions
  > More Challenges: https://tsch.js.org
*/
