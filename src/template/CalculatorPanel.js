/**
 * Created by limuzi on 2017/9/12.
 */
import React, {Component} from 'react'
import Screen from '../component/Screen'
import Button from '../component/Button'

class CalculatorPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            result: 123,
            num: []
        }
    }

    getNum(num) {
        this.setState({num: num})
    }

    render() {
        return (
            <div>
                <Screen show={this.state.num}/>
                <Button changeNum={this.getNum.bind(this)}/>
            </div>
        )
    }

}

export default CalculatorPanel