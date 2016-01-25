import React from 'react-native'
import { chan, go, take } from 'js-csp'

import model from './model'
import { update, dispatch } from './update'
import log from './log'

import Main from './components/main'

const actionsChannel = chan();

export default React.createClass({
  getInitialState() {
    return model
  },
  componentDidMount() {
    const self = this;

    go(function * () {
      while (true) {
        const state = self.state;
        console.log(state)
        const action = yield take(actionsChannel)
        log(action)
        self.setState(update(state, action))
      }
    })
  },
  dispatch(action) {
    return dispatch(actionsChannel, action)
  },
  render() {
    return <Main state={this.state} dispatch={this.dispatch} />
  }
})
