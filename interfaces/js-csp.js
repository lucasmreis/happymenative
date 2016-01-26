import type { Action } from '../js/update'

declare class Channel {}

declare module 'js-csp' {
  declare function chan(): Channel;
  declare function take(ch: Channel): Action
}
