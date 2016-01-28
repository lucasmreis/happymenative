// @flow

type N = number

export const between = (min: N, max: N, i: N): N =>
  max < min
    ? min
    : i < min
      ? min
      : i > max
        ? max
        : i
