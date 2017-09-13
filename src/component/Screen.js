/**
 * Created by limuzi on 2017/9/12.
 */
import React, {Component} from 'react'
import '../css/index.css'

class Screen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: props.num
        }
        console.log(props)
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        const num = nextProps.show.toString().replace(/,/g, "")
        this.setState({num: num});
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