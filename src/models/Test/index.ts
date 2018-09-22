export const PERFIX = 'Test'

export interface TestStatus {
  test: number,
  warning: string
}

export const initialState:TestStatus = {
  test: 4,
  warning: ''
}

export default {
  namespace: PERFIX,
  state: initialState,
  reducers: {
    'change'(state, {payload: warning}){
      return {
        ...state,
        warning: warning
      }
    }
  },
  effects: {

  }
}
