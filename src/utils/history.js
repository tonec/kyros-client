/* eslint-disable import/no-mutable-exports */
import qhistory from 'qhistory'
import { stringify, parse } from 'qs'
import { createBrowserHistory } from 'history'

let history

if (typeof window !== 'undefined') {
  history = qhistory(createBrowserHistory(), stringify, parse)
}

export default history
