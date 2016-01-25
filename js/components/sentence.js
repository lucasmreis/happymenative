import React, {
  View,
  Text,
  Animated,
  StyleSheet
} from 'react-native'

import color from './color'

export default React.createClass({
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
  render() {
    const { id, text } = this.props
    const { fadeAnim } = this.state
    const { bg, fg } = color(id)
    const interpolation = {
      inputRange: [0, 1],
      outputRange: [bg, fg]
    }
    return (
      <View style={[styles.view, {
        backgroundColor: bg
      }]}>
        <Text style={[styles.text, {
          color: fg
        }]}>
        {text}
        </Text>
      </View>)
  }
})
//fadeAnim.interpolate(interpolation)
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
