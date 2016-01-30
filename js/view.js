// @flow

import type { Action } from './update'

import React from 'react-native'
import Channel from 'async-csp'

import model from './model'
import { update, dispatch } from './update'
import log from './log'

import Main from './components/main'

const actionsChannel = new Channel()

export default React.createClass({
  getInitialState() {
    return model
  },
  async renderLoop() {
    while (true) {
      const state = this.state
      const action: Action = await actionsChannel.take()
      log(action)
      this.setState(update(state, action))
    }
  },
  componentDidMount() {
    this.renderLoop()
  },
  dispatch(action: Action): void {
    return dispatch(actionsChannel, action)
  },
  render() {
    return <Main state={this.state} dispatch={this.dispatch} />
  }
})
