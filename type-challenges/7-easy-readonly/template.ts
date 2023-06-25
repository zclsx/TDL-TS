type MyReadonly<T> = {
  //[P in T] T为一个接口无法直接遍历
  //[P in keyof T] keyof将T接口中所有数据key遍历返回
  //   interface Todo{
  //       a:string
  //       b:string
  //   }
  //   type r = keyof Todo //["a","b"]
  // const rv :r = "" //写""就会显示 a, b 证明keyof之后，是ab两个 。可以用这种方式测试
  readonly [P in keyof T] : T[P];
};

// interface User = {
//     readonly name:string
// }

// const xiaohong :User = {
//     name:"小红"
// }
// //想让用户不能改变name ，那就在类型旁边加上readonly
// xiaohong.name = "123";//readonly加上了就会报错了

//对比学习法 JS逻辑

function readonly(obj) {
  const result = {};
  for (const key in obj) {
    result["readonly" + key] = obj[key];
  }

  return result;
}

//1.返回一个对象
//2.遍历Obj (js里是对象  TS里面应该是接口) in -> mapped keyof ->looKup
//3.加上readonly关键字  新的知识点
//4.通过Key来获取Obj(接口)里面的值 indexed
