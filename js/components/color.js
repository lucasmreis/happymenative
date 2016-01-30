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
  return typeof id === 'string' && id === 'action'
     ? actionColors

   : typeof id === 'string' && id === 'dark-action'
     ? darkActionColors

   : typeof id === 'number'
     ? styleColors[id % styleColors.length]

   : styleColors[0]
}

export default color
