// @flow

export const between = (min: number, max: number, i: number) =>
  max < min
    ? min
    : i < min
      ? min
      : i > max
        ? max
        : i
