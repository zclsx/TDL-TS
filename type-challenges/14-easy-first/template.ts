// type First<T extends any[]> = T extends [] ? never : T[0]; 第一种解法
//extends: T === []

// type First<T extends any[]> = T["length"] extends 0 ? never : T[0]; //第二种解法
//通过 length

// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never; //第三种解法
// type ages = [1, 2, 3];
//union类型
// type t1 = ages[number]; //type ages = []; t1 返回是never
//看看 某个值是不是在union里面
//1 extends 1 ; 1 extends 2 ; 1 extends 3 分布式
// type t2 = T[0] extends ages[number] ? "true" : "false";

//T[0] -> T[0]如果没有，返回的是undefined


//看看能不能解构出来一个First 如果有的话，解构出来拿出去，如果没有，返回
type First<T extends any[]> = T extends [infer First, ...infer rest] //第四种解法
  ? First
  : never; 

// eg:type Tail<T extends any[]> = T extends [infer First, ...infer rest] ? rest : never;
//    type t4 = Tail<[1,2,3]> t4->[2,3]  / type t4 = Tail<[1]> t4->[]

//js

const first = (arr) => {
  //arr 是不是一个空数组， 如果是的话， 那么返回never
  //JS中，如果 arr === [] -> false
  //const arrStr = "[]" 如果是写死的
  //arrStr === "[]" -> true

  const [first, ...rest] = arr;
  return first ? first : "never"; //第四种解法

//   eg:const arr = [1,2,3] const [first,...rest] =arr first -> 1  rest -> [2,3]

  //   if (arr.length === 0) return "never"; //第二种解法
  //   return arr[0];
};

//知识点
//1.extends 类型条件判断
//2.获取 tuple 的 length 属性 indexed
//3.extends union 判断的规则
//4.infer 的使用(推断)
