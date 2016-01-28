// @flow

import React, {
  View,
  Text,
  Animated,
  StyleSheet
} from 'react-native'

import color from './color'

export default React.createClass({
  propTypes: {
    id: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired
  },
  getInitialState() {
    return {
      fadeAnim: new Animated.Value(0)
    }
  },
  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      { toValue: 1 },
    ).start();
  },
  componentWillUnmount() {
    Animated.timing(
      this.state.fadeAnim,
      { toValue: 0 },
    ).start();
  },
  render() {
    const { id, text } = this.props
    const { fadeAnim } = this.state
    const { bg, fg } = color(id)
    return (
      <View style={[styles.view, { backgroundColor: bg }]}>
        <Animated.View style={{ opacity: fadeAnim }}>
          <Text style={[styles.text, { color: fg }]}>
          {text}
          </Text>
        </Animated.View>
      </View>)
  }
})

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF8D00'
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff'
  }
})
