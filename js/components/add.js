import React, {
  View,
  TextInput,
  StyleSheet
} from 'react-native'

import TouchableAction from './touchable-action'

import color from './color'

export default React.createClass({
  getDefaultProps() {
    return {
      text: ''
    }
  },
  render() {
    const dispatch = this.props.dispatch
    return (
      <View style={styles.view}>
        <TouchableAction theme={'dark-action'} text={'SUBMIT'} dispatch={dispatch} />
        <TextInput
          onChangeText={text => dispatch({ type: 'CHANGE', text })}
          value={this.props.text}
          style={styles.text}
          autoFocus={true}
          multiline={true}
          numberOfLines={5} />
      </View>
    )
  }
})

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 30,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color('action').bg
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: color('action').fg
  }
})
