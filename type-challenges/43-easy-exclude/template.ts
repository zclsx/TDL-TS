type MyExclude<T, U> = T extends U ? never : T; //T extends U ? A : B  A相同值，B排外的值 不想返回用never

//T: a b c U: a   =>> a->a=A b->a=B c->a=B



//Js
//["a","b","c"]
//["a"] 两个数组依次对比，有的话剔除，没有重复的保存
function MyExclude(T, U: any[]) {
  const result = [];
  for (let i = 0; i < T.length; i++) {
    const t = T[i];

    // let boolean = false;
    // for (let j = 0; j < U.length; j++) {
    //   const u = U[j];

    //   if (t === u) {
    //     boolean = true;
    //   }
    // }

    // if (!boolean) {
    //     //@ts-ignore
    //   result.push(t);
    // }

    if(U.includes(t)){
        //@ts-ignore
        result.push(t)
    }
  }
  return result;
}
