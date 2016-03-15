// @flow

import React, {
  View,
  Text,
  Animated,
  StyleSheet
} from 'react-native'

import colors from './colors'

export default React.createClass({
  propTypes: {
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
    const { text } = this.props
    const { fadeAnim } = this.state
    return (
      <View style={styles.view}>
        <Animated.View style={{ opacity: fadeAnim }}>
          <Text style={styles.text}>
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
    backgroundColor: colors.background,
    padding: 20
  },
  text: {
    fontFamily: 'Merriweather-Light',
    fontWeight: '300',
    fontSize: 28,
    color: colors.fonts
  }
})
