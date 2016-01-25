const white = '#fff'
const gray = '#34495e'
const colors = ['#f39c12', '#3498db', '#e74c3c', '#2ecc71', '#9b59b6']

const styleColors = colors
  .map(c => [
    { bg: c, fg: white },
    { bg: white, fg: c }])
  .reduce((a, b) => a.concat(b));

export default id => id === 'action'
  ? { bg: gray, fg: white }
  : styleColors[id % styleColors.length]
