import React, {
  TouchableNativeFeedback,
  View,
  Text,
  StyleSheet
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

import colors from './colors'

export default ({ onPress }) => (
  <TouchableNativeFeedback
    onPress={onPress}
    background={TouchableNativeFeedback.Ripple(colors.darkerSubmitAction, false)}>

    <View style={styles.action}>
      <Icon name={'add'} size={40} color={colors.actionIcons} />
    </View>

  </TouchableNativeFeedback>
)

const styles = StyleSheet.create({
  action: {
    backgroundColor: colors.submitAction,
    alignItems: 'center',
    alignSelf: 'stretch'
  }
})
