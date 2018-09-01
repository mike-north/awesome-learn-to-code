type UnaryFn<A, B> = (a: A) => B;

export function pipe<A, R>(a: UnaryFn<A, R>): (a: A) => R;
export function pipe<A, B, R>(f1: UnaryFn<A, B>, f2: UnaryFn<B, R>): (a: A) => R;
export function pipe<A, B, C, R>(f1: UnaryFn<A, B>, f2: UnaryFn<B, C>, f3: UnaryFn<C, R>): (a: A) => R;
export function pipe<A, B, C, D, R>(
  f1: UnaryFn<A, B>,
  f2: UnaryFn<B, C>,
  f3: UnaryFn<C, D>,
  f4: UnaryFn<D, R>,
): (a: A) => R;
export function pipe<A, B, C, D, E, R>(
  f1: UnaryFn<A, B>,
  f2: UnaryFn<B, C>,
  f3: UnaryFn<C, D>,
  f4: UnaryFn<D, R>,
): (a: A) => R;
export function pipe<A, B, C, D, E, R>(
  f1: UnaryFn<A, B>,
  f2: UnaryFn<B, C>,
  f3: UnaryFn<C, D>,
  f4: UnaryFn<D, E>,
  f5: UnaryFn<E, R>,
): (a: A) => R;
export function pipe<A, B, C, D, E, F, R>(
  f1: UnaryFn<A, B>,
  f2: UnaryFn<B, C>,
  f3: UnaryFn<C, D>,
  f4: UnaryFn<D, E>,
  f5: UnaryFn<E, F>,
  f6: UnaryFn<F, R>,
): (a: A) => R;
export function pipe<A, B, C, D, E, F, G, R>(
  f1: UnaryFn<A, B>,
  f2: UnaryFn<B, C>,
  f3: UnaryFn<C, D>,
  f4: UnaryFn<D, E>,
  f5: UnaryFn<E, F>,
  f6: UnaryFn<F, G>,
  f7: UnaryFn<G, R>,
): (a: A) => R;
export function pipe(...fns: Array<UnaryFn<any, any>>) {
  const toReturn = (initial: any) => fns.reduce((val, fn) => fn(val), initial);
  return toReturn;
}
