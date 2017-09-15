/**
 * Created by limuzi on 2017/9/12.
 */
import React, {Component} from 'react'
import '../css/index.css'

class DataScreen extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            result: 0
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        this.setState({result: nextProps.showData})
    }

    render() {
        return (
            <div>
                <input className="screen" value={this.state.result} type="text"/>
            </div>
        )
    }

}

export default DataScreen