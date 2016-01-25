import React, {
  View,
  Text,
  StyleSheet
} from 'react-native'

import color from './color'

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
