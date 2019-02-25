// @flow

export type ReadLens<TIn, TOut> = {
  get: TIn => TOut
};

export type WriteLens<TIn, TOut> = {};

export type Lens<TIn, TOut> = ReadLens<TIn, TOut> & {
  set: (TIn, TOut) => TIn
};

export function composeReadLenses<TIn, TMid, TOut>(
  r1: ReadLens<TIn, TMid>,
  r2: ReadLens<TMid, TOut>
): ReadLens<TIn, TOut> {
  return {
    get: (val: TIn) => r2.get(r1.get(val))
  };
}

export function composeLenses<TIn, TMid, TOut>(
  l1: Lens<TIn, TMid>,
  l2: Lens<TMid, TOut>
): WriteLens<TIn, TOut> {
  return {
    get: (val: TIn) => l2.get(l1.get(val)),
    set: (inset: TIn, val: TOut) => l1.set(inset, l2.set(l1.get(inset), val))
  };
}
