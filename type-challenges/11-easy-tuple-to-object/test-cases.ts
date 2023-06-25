import type { Equal, Expect } from "@type-challenges/utils";

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

//typeof 看 type r中r的声明
type r = typeof tuple;
// as const取消后
//type r -> string[]
//tuple[0] = "1324" 如果不允许被修改就把里面全部变为常量 这就是as const的作用
// tuple[0] = "132" 加上as const再对比，只能是写死的

// 1.字面量类型

// let str = "123"
// type s = typeof str //s -> string
// 因为let创建,str 可以随便去写
// str="123456651651"

// const strConst = "234"

// type sc = typeof strConst //sc-> "234" 意味着sc这个值只能是234 不能被修改
// sc = "1231651" 字面量类型为const 去服务，因为只能是一个值

//number string symbol只能接受这三种类型，而不能接收[1, 2], {}
type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >
];

//@ts-expect-error
type error = TupleToObject<[[1, 2], {}]>;

//const let 声明的 js世界
//type interface  type类型世界

//1.typeof
//2.字面量类型
//3.@ts-expect-error注释

// expect(()=>{
//     type error = TupleToObject<[[1, 2], {}]>
// })
