import * as types from '../types'
export default {
  [types.SET_TESTNAME] (state, data) {
    state.test_name = data
  }
}