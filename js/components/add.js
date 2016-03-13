import React, {
  View,
  Text,
  TextInput,
  BackAndroid,
  StyleSheet
} from 'react-native'

import KeyboardSpacer from 'react-native-keyboard-spacer'

import messages from '../messages'

import SubmitAction from './submit-action'
import AddBar from './add-bar'

export default React.createClass({
  getDefaultProps() {
    return {
      text: ''
    }
  },
  backHandler() {
    this.props.navigator.popToTop()
    return true
  },
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.backHandler)
  },
  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.backHandler)
  },
  addAndGoToPager(action) {
    this.props.dispatch(action)
    this.props.navigator.popToTop()
  },
  render() {
    const dispatch = this.props.dispatch
    return (
      <View style={styles.view}>
        <AddBar onPress={() => this.backHandler()} />

        <View style={styles.textContainer}>
          <TextInput
            placeholder={messages.add_placeholder}
            placeholderTextColor={'#ddd'}
            selectionColor={'#ddd'}
            underlineColorAndroid={'#fff'}
            onChangeText={text => dispatch({ type: 'CHANGE', text })}
            value={this.props.text}
            style={styles.text}
            multiline={true}
            numberOfLines={5}
            autoFocus={true} />
        </View>

        <SubmitAction onPress={() => this.addAndGoToPager({ type: 'ADD' })} />

        <KeyboardSpacer />
      </View>
    )
  }
})

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff'
  },
  textContainer: {
    flex: 1,
    padding: 10
  },
  text: {
    fontFamily: 'serif',
    fontSize: 28,
    color: '#777'
  },
  upperBar: {

  },
  action: {
    backgroundColor: '#2ecc71',
    alignSelf: 'stretch'
  }
})
