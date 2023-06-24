// type MyPick<T, K> = any;
//ts联合类型 union
//K extends T约束一下，K必须存在T中 K title存不存在于 T 中 依此对比
// eg:[title,completed, description]
//    [title,completed] 隐藏了一个循环 循环对比

//keyof可以帮我们获取到Todo这个接口里所有的key 相当于 title ["title","description","completed"]

type MyPick<T, K extends keyof T> = {
  //[P in K] : T[P] T[P]会报错，有可能当前P有可能是在T中不存在的
  [P in K]: T[P]; // P -> 'title' | 'completed'
};

//先按照js去解题，再转为ts
//对比学习

function MyPick(todo, keys) {
  //tode和keys相当于上面声明好的 <T,K>
  const obj = {};

  //遍历keys中的key的值将其赋值到obj对象中
  keys.forEach((key) => {
    //if (key in todo)看看是否在tode里面
    if (key in todo) {
      obj[key] = todo[key];
    }
  });
  // 但是->  MyPick<Todo, 'title' | 'completed' | 'invalid'>, invalid是不存在于TODO,
  //所以要进行限制

  return obj;
}

//1.返回一个对象    type MyPick<T, K> = {}写一个对象就可以了
//2.遍历forEach    [P in K] 遍历  mapped union
//3.todo[key] 取值  T[P]  indexed
//4.判断key在不在todo里面
//  4.1 keyof lookup
//  4.2 key in todo =>  extends Generic Constraints
//如果写TS，将JS转为TS语法就搞定
// https://www.typescriptlang.org/
