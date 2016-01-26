// @flow

import type { Action } from './update'

export default function (action: Action): void {
  console.log(`Received action ${action.type} in update channel`)
  console.log(action)
}
