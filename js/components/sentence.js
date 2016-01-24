import React, {
  Text,
  View,
  StyleSheet
} from 'react-native'

const white = '#fff'
const colors = ['#f39c12', '#3498db', '#e74c3c', '#2ecc71', '#9b59b6']

const styleColors = colors
  .map(c => [
    { bg: c, fg: white },
    { bg: white, fg: c }])
  .reduce((a, b) => a.concat(b));

const color = id => styleColors[id % styleColors.length]

export default ({ id, text }) => (
  <View style={[styles.view, {
    backgroundColor: color(id).bg
  }]}>
    <Text style={[styles.text, {
      color: color(id).fg
    }]}>{text}</Text>
  </View>
)

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF8D00'
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff'
  }
})
