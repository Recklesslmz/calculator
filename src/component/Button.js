/**
 * Created by limuzi on 2017/9/12.
 */
import React, {Component} from 'react'
import '../css/index.css'
class Button extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            num: []
        }
    }

    buttonNum(num, type) {
        console.log(num, type)
        if (type === 1) {
            let numArray = this.state.num
            numArray.push(num)
            this.setState({num: numArray})
            this.props.changeNum(this.state.num)
        }

        console.log(this.state.num)
    }

    render() {
        const keyBoards =
            [
                {num: '(', type: 2}, {num: ')', type: 2}, {num: '%', type: 2}, {num: 'CE', type: 2},
                {num: 7, type: 1}, {num: 8, type: 1}, {num: 9, type: 1}, {num: '÷', type: 2},
                {num: 4, type: 1}, {num: 5, type: 1}, {num: 6, type: 1}, {num: '×', type: 2},
                {num: 1, type: 1}, {num: 2, type: 1}, {num: 3, type: 1}, {num: '-', type: 2},
                {num: 0, type: 1}, {num: '.', type: 1}, {num: '=', type: 3}, {num: '+', type: 2}
            ]
        const keyList = keyBoards.map((item, i) => {
            switch (item.type) {
                case 1:
                    return <div className="buttons" key={i}
                                onClick={() => this.buttonNum(item.num, item.type)}>{item.num}</div>
                    break
                case 2:
                    return <div className="buttons buttonsSymbol" key={i}
                                onClick={() => this.buttonNum(item.num, item.type)}>{item.num}</div>
                    break
                case 3:
                    return <div className="buttons buttonsEqual" key={i}
                                onClick={() => this.buttonNum(item.num, item.type)}>{item.num}</div>
                    break
            }
        })
        return (
            <div>
                {keyList}
            </div>
        )
    }
}

export default Button