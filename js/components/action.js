// @flow weak

import React, {
  View,
  Text,
  StyleSheet
} from 'react-native'

import color from './color'

export default ({ text, theme }) => (
  <View style={styles(theme).actionsView}>
    <Text style={styles(theme).actionsText}>
      {text}
    </Text>
  </View>
)

const styles = theme =>
  StyleSheet.create({
    actionsText: {
      fontSize: 18,
      color: color(theme).fg,
      textAlign: 'center'
    },
    actionsView: {
      backgroundColor: color(theme).bg,
      width: 100,
      height: 100,
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      margin: 10,
      // android
      elevation: 10,
      // ios
      shadowColor: '#000000',
      shadowOpacity: 0.8,
      shadowRadius: 2,
      shadowOffset: {
        height: 1,
        width: 0
      }
    }
  })
