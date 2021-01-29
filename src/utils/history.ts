import qhistory from 'qhistory'
import { stringify, parse } from 'qs'
import { createBrowserHistory, History } from 'history'

let history

if (typeof window !== 'undefined') {
  history = qhistory(createBrowserHistory(), stringify, parse)
}

export default history as History
