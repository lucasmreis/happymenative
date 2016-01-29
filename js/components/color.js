// @flow

import type { Id } from '../model'

const white = '#fff'
const gray = '#34495e'
const darkGray = '#2c3e50'
const colors = ['#3498db', '#f39c12', '#e74c3c', '#2ecc71', '#9b59b6']

type ColorShades = { bg: string, fg: string }

const actionColors:     ColorShades = { bg: gray, fg: white }

const darkActionColors: ColorShades = { bg: darkGray, fg: white }

const styleColors: Array<ColorShades> = colors
  .map(c => [
    { bg: c, fg: white },
    { bg: white, fg: c }])
  .reduce((a, b) => a.concat(b));

function color(id: Id | 'action' | 'dark-action'): ColorShades {
  if (typeof id === 'string' && id === 'action') {
    return actionColors
  } else if (typeof id === 'string' && id === 'dark-action') {
    return darkActionColors
  } else {
    return styleColors[id % styleColors.length]
  }
}

export default color
