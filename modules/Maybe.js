// @flow

import type { Lens } from "./Lens";

export type Maybe<T> =
  | {|
      none: true
    |}
  | {|
      none: false,
      value: T
    |};

function None<T>(): Maybe<T> {
  return {
    none: true
  };
}

function Just<T>(val: T): Maybe<T> {
  return { none: false, value: val };
}

function map<T, U>(m: Maybe<T>, func: T => U): Maybe<U> {
  return m.none ? None() : Just(func(m.value));
}

function bind<T, U>(m: Maybe<T>, func: T => Maybe<U>): Maybe<U> {
  return m.none ? None() : func(m.value);
}

const NullableToMaybe: Lens<* | void, Maybe<*>> = {
  get: function<T: *>(val: T | void): Maybe<T> {
    return val == null ? None() : Just(val);
  },
  set: function<T: *>(nullable: T | void, m: Maybe<T>): T | void {
    return m.none ? undefined : m.value;
  }
};

module.exports = {
  None,
  Just,
  map,
  bind,
  NullableToMaybe
};
