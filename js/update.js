// @flow

import type { Sentence, Id, Model } from './model'

import { putAsync } from 'js-csp';

export type Change = { type: 'CHANGE', id: Id }
export type Add    = { type: 'ADD', text: Sentence }
export type Remove = { type: 'REMOVE' }

export type Action = Change
                   | Add
                   | Remove

export function update(state: Model, action: Action): Model {
  const t: string          = action.type
  const s: Array<Sentence> = state.sentences

  return t === 'CHANGE' ? { ...state, current: action.id }
       : t === 'ADD'    ? { ...state, sentences: [action.text, ...s] }
       : t === 'REMOVE' ? { ...state, sentences: s.filter((_, id) => id !== state.current) }
       : state
}

export function dispatch(channel: any, action: Action): void {
  putAsync(channel, action)
}
