// @flow

import type { Action } from './update'

import React from 'react-native'
import Channel from 'async-csp'

import model from './model'
import { update, dispatch } from './update'
import log from './log'

import Main from './components/main'

const actionsChannel = new Channel()

const go = asyncFn => asyncFn()

export default React.createClass({
  getInitialState() {
    return model
  },
  componentDidMount() {
    const self = this;

    go(async () => {
      while (true) {
        const state = self.state
        const action: Action = await actionsChannel.take()
        log(action)
        self.setState(update(state, action))
      }
    })
  },
  dispatch(action: Action): void {
    return dispatch(actionsChannel, action)
  },
  render() {
    return <Main state={this.state} dispatch={this.dispatch} />
  }
})
