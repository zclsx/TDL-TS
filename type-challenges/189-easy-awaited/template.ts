// type MyAwaited<T> = T extends Promise<infer X> ? MyAwaited<X> :never;

//比如传入Promise<string> ,判断T extends Promise<infer X>,=> MyAwaited<String>
//MyAwaited<String>再去循环，string extends Promise<infer X> 就会执行never

// type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X> ? MyAwaited<X> :T;//never变T就会通过了

type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X>
  ? X extends Promise<unknown>
    ? MyAwaited<X>
    : X
  : T;//这里T可以是任何，因为走不到这一步了 
  //never变T就会通过了 MyAwaited<X>->MyAwaited<T> 这时候进去循环，返回X

// infer 设置一个x未知 infer X只能写在条件类型里面

//最后要限制一下传入的类型
// unknown告诉他传入的一定是一个promise
// 但是如果传入一个promise<string> 走到MyAwaited<X>循环，x -> string , string执行循环，又必须是一个promise
//X extends Promise<unknown> ?如果他是一个promise 就能执行MyAwaited<X>
//如果他不是的话，就走之前的X
