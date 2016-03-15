import React, {
  TouchableNativeFeedback,
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'

import colors from './colors'

export default ({ onPress }) => (
  <TouchableNativeFeedback
    onPress={onPress}
    background={TouchableNativeFeedback.Ripple(colors.darkerBackground, false)}>

    <View style={styles.action}>
      <Image source={require('./images/back-arrow.png')} />
    </View>

  </TouchableNativeFeedback>
)

const styles = StyleSheet.create({
  action: {
    backgroundColor: colors.background,
    alignSelf: 'stretch',
    padding: 10
  }
})
