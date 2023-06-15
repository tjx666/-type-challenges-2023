import type { Equal, Expect } from '@type-challenges/utils';

/**
 * 思路：映射类型 https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
 */

type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};

// ------------------------ test -----------------------------
type cases = [
    Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
    Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
    // @ts-expect-error
    MyPick<Todo, 'title' | 'completed' | 'invalid'>,
];

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

interface Expected1 {
    title: string;
}

interface Expected2 {
    title: string;
    completed: boolean;
}
