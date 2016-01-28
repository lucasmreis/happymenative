// @flow weak

import React, { Alert } from 'react-native'

import SwipeActions from 'swipe-actions'

import Action from './action'
import Pager from './pager'

const lowerNode = <Action text={'REMOVE'} />
const upperNode = <Action text={'LIST'} />

const lowerAction = ({ state, dispatch }) =>
  () => Alert.alert(
    'Remove',
    'Are you sure?',
    [
      { text: 'Cancel', onPress: () => {}, style: 'cancel' },
      { text: 'OK', onPress: () => dispatch({ type: 'REMOVE' }) },
    ]
)

export default props => (
  <SwipeActions
    lowerNode={lowerNode}
    upperNode={upperNode}
    lowerAction={lowerAction(props)}>
    <Pager {...props} />
  </SwipeActions>
)
