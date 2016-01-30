// @flow

import type { Sentence, Id, Model } from './model'

import { between } from './util'

export type Select = { type: 'SELECT', id: Id }
export type Add    = { type: 'ADD' }
export type Change = { type: 'CHANGE', text: Sentence }
export type Remove = { type: 'REMOVE' }

export type Action = Select
                   | Add
                   | Change
                   | Remove

export function update(state: Model, action: Action): Model {
  const s: Array<Sentence> = state.sentences
  const c: Id              = state.current

  switch (action.type) {
    case 'SELECT':
      return { ...state, current: action.id }

    case 'ADD':
      const addSentences = state.toAdd === ''
        ? s
        : [state.toAdd, ...s]
      return { ...state, sentences: addSentences, toAdd: '', current: 0 }

    case 'CHANGE':
      return { ...state, toAdd: action.text }

    case 'REMOVE':
      const sentences = s.filter((_, id) => id !== c)
      const current   = between(0, s.length - 2, c)
      return { ...state, sentences, current }

    default:
      return state
  }
}

export function dispatch(channel: any, action: Action): void {
  channel.put(action)
}
