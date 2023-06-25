import type { Equal, Expect } from "@type-challenges/utils";

const tesla = ["tesla", "model 3", "model X", "model Y"] as const;
//加上as const，从string[] ->转变为readonly 定死的定长的

// const tesla = ["tesla", "model 3", "model X", "model Y"]
// type t5 = typeof tesla //t5->string[]

const spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT",
] as const;

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<"hello world">
];

//首先返回一个length

// eg:
type StringNumberPair = [string, number];

type stringArr = string[]
type t3 = stringArr["length"]
//tuple是一个定死的，如果取值是能取到值，而如果是数组类型，取出来是number类型

type t2 = StringNumberPair["length"] //t2 -> 2

const str :StringNumberPair = ["123",123] //123换成"123"就不匹配， 这就是tuple类型