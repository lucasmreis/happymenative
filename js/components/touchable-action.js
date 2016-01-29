// @flow weak

import React, {
  TouchableOpacity
} from 'react-native'

import Action from './action'

export default ({ text, theme, dispatch }) => (
  <TouchableOpacity
    onPress={() => dispatch({ type: 'ADD' })}>

    <Action text={text} theme={theme} />

  </TouchableOpacity>
)
