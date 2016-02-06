// @flow weak

import React, {
  TouchableOpacity
} from 'react-native'

import Action from './action'

export default ({ text, icon, theme, dispatch }) => (
  <TouchableOpacity
    onPress={() => dispatch({ type: 'ADD' })}>

    <Action text={text} icon={icon} theme={theme} />

  </TouchableOpacity>
)
