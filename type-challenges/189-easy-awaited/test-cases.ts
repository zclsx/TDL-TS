import type { Equal, Expect } from '@type-challenges/utils'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>

//解构里面的类型，把Promise去掉，类型留下
type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
]

//当我们传入一个非Promise的类型应该抛出一个问题
// @ts-expect-error
type error = MyAwaited<number>