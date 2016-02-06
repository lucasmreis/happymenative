// @flow weak

import React, {
  View,
  Text,
  StyleSheet
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

import color from './color'

export default ({ text, icon, theme }) => (
  <View style={styles(theme).actionsView}>
    <Icon name={icon} size={32} color={color(theme).fg} />
    <Text style={styles(theme).actionsText}>
      {text}
    </Text>
  </View>
)

const styles = theme =>
  StyleSheet.create({
    actionsText: {
      fontSize: 16,
      color: color(theme).fg,
      textAlign: 'center'
    },
    actionsView: {
      backgroundColor: color(theme).bg,
      width: 100,
      height: 100,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      margin: 30,
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
