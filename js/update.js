// @flow

import type { Sentence, Id, Model } from './model'

import { putAsync } from 'js-csp';

import { between } from './util'

export type Change = { type: 'CHANGE', id: Id }
export type Add    = { type: 'ADD', text: Sentence }
export type Remove = { type: 'REMOVE' }

export type Action = Change
                   | Add
                   | Remove

export function update(state: Model, action: Action): Model {
  const s: Array<Sentence> = state.sentences
  const c: Id              = state.current

  switch (action.type) {
    case 'CHANGE':
      return { ...state, current: action.id }

    case 'ADD':
      return { ...state, sentences: [action.text, ...s] }

    case 'REMOVE':
      const sentences = s.filter((_, id) => id !== c)
      const current   = between(0, s.length - 2, c)
      return { ...state, sentences, current }

    default:
      return state
  }
}

export function dispatch(channel: any, action: Action): void {
  putAsync(channel, action)
}
