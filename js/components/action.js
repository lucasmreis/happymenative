// @flow weak

import React, {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

import colors from './colors'

const theme = type =>
  type === 'add'
    ? { color: colors.addAction, icon: 'create', height: 120 }
    : { color: colors.removeAction, icon: 'clear', height: Dimensions.get('window').height / 4 }

export default ({ type }) => {
  const { color, icon, height } = theme(type)
  return <View style={styles(height, color).actionsView}>
    <Icon name={icon} size={40} color={colors.actionIcons} />
  </View>
}

const styles = (height, color) =>
  StyleSheet.create({
    actionsView: {
      backgroundColor: color,
      alignSelf: 'stretch',
      height: height,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
