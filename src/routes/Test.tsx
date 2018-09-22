import * as React from 'react'
import * as Redux from 'redux'
import {PERFIX,TestStatus} from "../models/Test";
import {connect} from "dva";
import {Button} from 'antd'
import MyComponent from '../components/ImageGalley'

type IAppProps = TestStatus
interface IAppState {}
type TestDispatch  = {
  dispatch: Redux.Dispatch<any>
}

class Test extends React.Component<IAppProps & TestDispatch, IAppState> {

  buttonClick () {
    this.props.dispatch({
      type: `${PERFIX}/change`,
      payload: 'test'
    })
  }

  public render(): JSX.Element {
    return (
      <div>
        Hello world!
        <Button onClick={this.buttonClick.bind(this)}>Test</Button>
        <MyComponent/>
        <div>Test
          <div>{this.props.test + 2}</div>
          <div>{this.props.warning}</div>
        </div>
      </div>
    )
  }
}

// function mapStateToProps(state: any):TestStatus {
//   return state[PERFIX] as TestStatus || {}
// }

const mapStateToProps = (state:TestStatus) => {
  return {
    state
  }
}
export default connect(mapStateToProps)(Test)
