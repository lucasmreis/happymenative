// @flow weak

import type { Action } from './update'

import React, { AsyncStorage } from 'react-native'
import Channel from 'async-csp'

import emptyModel from './model'
import { update, dispatch } from './update'
import log from './log'

import Main from './components/main'

const STORAGE_KEY = 'HappyMeStorage'

const actionsChannel = new Channel()

export default React.createClass({
  getInitialState() {
    return emptyModel
  },
  async save(state) {
    const data = JSON.stringify(state)
    await AsyncStorage.setItem(STORAGE_KEY, data)
  },
  async load(): Promise {
    try {
      const loaded = await AsyncStorage.getItem(STORAGE_KEY)
      const parsed = JSON.parse(loaded)
      return parsed
        ? { ...parsed, current: 0 }
        : emptyModel
    } catch (_) {
      return emptyModel
    }
  },
  async renderLoop() {
    while (true) {
      const action: Action = await actionsChannel.take()
      log(action)
      const newState = update(this.state, action)
      this.setState(newState)
      this.save(newState)
    }
  },
  async componentDidMount() {
    const initialState = await this.load()
    this.setState(initialState)
    this.renderLoop()
  },
  dispatch(action: Action): void {
    return dispatch(actionsChannel, action)
  },
  render() {
    return <Main state={this.state} dispatch={this.dispatch} />
  }
})
