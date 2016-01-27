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
  const t: string          = action.type
  const s: Array<Sentence> = state.sentences
  const c: Id              = state.current

  return t === 'CHANGE' ? { ...state, current: action.id }
       : t === 'ADD'    ? { ...state, sentences: [action.text, ...s] }
       : t === 'REMOVE' ? { ...state, sentences: s.filter((_, id) => id !== c), current: between(0, s.length - 2, c) }
       : state
}

export function dispatch(channel: any, action: Action): void {
  putAsync(channel, action)
}
