// @flow

type N = number

export function between(min: N, max: N, i: N): N {
  return max < min
    ? min
    : i < min
      ? min
      : i > max
        ? max
        : i
}
