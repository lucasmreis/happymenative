// @flow weak

import React, {
  View,
  Text,
  StyleSheet
} from 'react-native'

import color from './color'

export default ({ text }) => (
  <View style={styles.actionsView}>
    <Text style={styles.actionsText}>
      {text}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  actionsText: {
    fontSize: 18,
    color: color('action').fg,
    textAlign: 'center'
  },
  actionsView: {
    backgroundColor: color('action').bg,
    width: 100,
    height: 100,
    flex: 1,
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
