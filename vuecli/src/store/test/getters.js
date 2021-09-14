import * as types from '../types'
export default {
  [types.GET_TESTCLASSNAME] (state) {
    return `${state.test_class}年级`
  }
}