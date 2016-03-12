// @flow weak

import React, { Alert, Navigator } from 'react-native'

import SwipeActions from 'swipe-actions'

import Action from './action'
import Pager from './pager'
import Add from './add'

const upperNode = <Action type={'add'} />
const lowerNode = <Action type={'remove'} />

const upperAction = navigator => () => navigator.push({ screen: 'add' })

const lowerAction = ({ state, dispatch }) => () =>
  Alert.alert(
    'Remove',
    'Are you sure?',
    [
      { text: 'Cancel', onPress: () => {}, style: 'cancel' },
      { text: 'OK', onPress: () => dispatch({ type: 'REMOVE' }) },
    ]
  )

const renderScene = props => ({ screen }, navigator) =>
  screen === 'add'
    ? <Add text={props.state.toAdd} dispatch={props.dispatch} navigator={navigator} />
    : <SwipeActions
        upperNode={upperNode}
        lowerNode={lowerNode}
        upperAction={upperAction(navigator)}
        lowerAction={lowerAction(props)}>
        <Pager {...props} />
      </SwipeActions>

export default props => (
  <Navigator
    initialRoute={{ screen: 'pager' }}
    renderScene={renderScene(props)}
    configureScene={() => Navigator.SceneConfigs.FloatFromBottomAndroid} />
  )
