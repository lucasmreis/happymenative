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
    background={TouchableNativeFeedback.Ripple(colors.darkerBackground, false)}>

    <View style={styles.action}>
      <Icon name={'arrow-back'} size={32} color={colors.fonts} />
    </View>

  </TouchableNativeFeedback>
)

const styles = StyleSheet.create({
  action: {
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    padding: 5
  }
})
