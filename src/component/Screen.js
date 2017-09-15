/**
 * Created by limuzi on 2017/9/12.
 */
import React, {Component} from 'react'
import '../css/index.css'

class Screen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0
        }
    }

    componentWillReceiveProps(nextProps) {
        const num = nextProps.show.toString().replace(/,/g, "")
        console.log(num)
        this.setState({num: num || 0});
    }

    render() {
        return (
            <div>
                <input className="screen" value={this.state.num} type="text"/>
            </div>
        )
    }

}

export default Screen