/**
 * Created by limuzi on 2017/9/12.
 */
import React, {Component} from 'react'
import Screen from '../component/Screen'
import DataScreen from '../component/DataScreen'
import Button from '../component/Button'

class CalculatorPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            result: '',
            num: []
        }
    }

    getNum(num) {
        this.setState({num: num})
    }

    showData(result) {
        console.log(result)
        this.setState({result: result})
    }

    render() {
        return (
            <div>
                <DataScreen showData={this.state.result}/>
                <Screen show={this.state.num}/>
                <Button showScreen={this.showData.bind(this)} changeNum={this.getNum.bind(this)}
                />
            </div>
        )
    }

}

export default CalculatorPanel