import { putAsync } from 'js-csp';

// type Action = { type: 'ADD', text: string }
//             | { type: 'REMOVE', id: number }

export function update(state, action) {
  const t = action.type
  const s = state.sentences

  return t === 'ADD'    ? { sentences: [action.text, ...s] }
       : t === 'REMOVE' ? { sentences: s.filter((_, id) => id !== action.id) }
       : state
}

export function dispatch(channel, action) {
  putAsync(channel, action)
}
