import type { Equal, Expect } from "@type-challenges/utils";

type t = Exclude<"a" | "b" | "c", "a">; // 'b' | 'c'

type cases = [
  Expect<Equal<MyExclude<"a" | "b" | "c", "a">, "b" | "c">>,
  Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, "c">>,
  Expect<
    Equal<MyExclude<string | number | (() => void), Function>, string | number>
  >
];
