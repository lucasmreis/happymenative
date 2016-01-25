import { putAsync } from 'js-csp';

// type Action = { type: 'CHANGE', id: number }
//             | { type: 'ADD', text: string }
//             | { type: 'REMOVE' }

export function update(state, action) {
  const t = action.type
  const s = state.sentences

  return t === 'CHANGE' ? { ...state, current: action.id }
       : t === 'ADD'    ? { ...state, sentences: [action.text, ...s] }
       : t === 'REMOVE' ? { ...state, sentences: s.filter((_, id) => id !== state.current) }
       : state
}

export function dispatch(channel, action) {
  putAsync(channel, action)
}
