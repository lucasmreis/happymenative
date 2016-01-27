// @flow

import type { Id } from '../model'

const white = '#fff'
const gray = '#34495e'
const colors = ['#f39c12', '#3498db', '#e74c3c', '#2ecc71', '#9b59b6']

type ColorShades = { bg: string, fg: string }

const actionColors: ColorShades = { bg: gray, fg: white }

const styleColors: Array<ColorShades> = colors
  .map(c => [
    { bg: c, fg: white },
    { bg: white, fg: c }])
  .reduce((a, b) => a.concat(b));

function color(id: Id | 'action'): ColorShades {
  return id === 'action'
    ? actionColors
    : styleColors[id % styleColors.length]
}

export default color
