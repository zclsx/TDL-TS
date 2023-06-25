import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
];

// const arr : [3,2,1] = [3,2] 相当于写死的类型 3,2,1 只能是这个 不然是错的

type t1 = First<[]>; //t1-> undefined

type errors = [
  // @ts-expect-error
  First<"notArray">,
  // @ts-expect-error
  First<{ 0: "arrayLike" }>
];

//知识点
//如果是一个[]空数组的话，那么获取的[0]是 undefined
