/**
 * Created by limuzi on 2017/9/12.
 */
import React, {Component} from 'react'
import '../css/index.css'

class DataScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <input className="screen dataScreen" value={this.props.showData || 0} type="text"/>
            </div>
        )
    }

}

export default DataScreen
