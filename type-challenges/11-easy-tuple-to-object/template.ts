type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  //{} 返回一个对象
  //如何去遍历一个数组？P in T[number]
  [P in T[number]]: P;
};

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

//keyof array -> 可以得到array的索引
type r = TupleToObject<typeof tuple>;

//JS的实现

function TupleToObject(array) {

    //array里面的key是不是 string  / Number /symbol 类型
    //error

  const Object = {};
  array.forEach((val) => {
    Object[val] = val;
  });

  return Object;
}

// 1.返回一个对象 
// 2.遍历一个数组array T[number]
