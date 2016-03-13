import React, {
  TouchableNativeFeedback,
  View,
  Text,
  StyleSheet
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

export default ({ onPress }) => (
  <TouchableNativeFeedback
    onPress={onPress}
    background={TouchableNativeFeedback.Ripple('#27ae60', false)}>

    <View style={styles.action}>
      <Icon name={'add'} size={40} color={'#fff'} />
    </View>

  </TouchableNativeFeedback>
)

const styles = StyleSheet.create({
  action: {
    backgroundColor: '#2ecc71',
    alignItems: 'center',
    alignSelf: 'stretch'
  }
})
