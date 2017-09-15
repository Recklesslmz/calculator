/**
 * Created by limuzi on 2017/9/12.
 */
import React, {Component} from 'react'
import '../css/index.css'
class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: [],
            symbolNum: [],
            result: ''
        }
    }

    buttonNum(num, type) {
        if (type === 1 || type === 2) {
            let numArray = this.state.num
            numArray.push(num)
            this.setState({num: numArray})
        }
        if (type === 3) {
            this.props.showScreen(eval(this.state.num.toString().replace(/,/g, "")))
        }
        if (type === 4) {
            this.state.num.pop()
        }
        this.props.changeNum(this.state.num)
    }

    render() {
        const keyBoards = [
            {num: '(', type: 2}, {num: ')', type: 2}, {num: '%', type: 2}, {num: 'CE', type: 4},
            {num: 7, type: 1}, {num: 8, type: 1}, {num: 9, type: 1}, {num: '÷', type: 2},
            {num: 4, type: 1}, {num: 5, type: 1}, {num: 6, type: 1}, {num: '×', type: 2},
            {num: 1, type: 1}, {num: 2, type: 1}, {num: 3, type: 1}, {num: '-', type: 2},
            {num: 0, type: 1}, {num: '.', type: 1}, {num: '=', type: 3}, {num: '+', type: 2}
        ]
        const keyList = keyBoards.map((item, i) => {
            switch (item.type) {
                case 1:
                    return <div className="buttons" key={ i }
                                onClick={() => this.buttonNum(item.num, item.type) }> { item.num } </div>
                    break
                case 2:
                case 4:
                    return <div className="buttons buttonsSymbol" key={ i }
                                onClick={() => this.buttonNum(item.num, item.type) }> { item.num } </div>
                    break
                case 3:
                    return <div className="buttons buttonsEqual" key={ i }
                                onClick={() => this.buttonNum(item.num, item.type) }> { item.num } </div>
                    break
            }
        })
        return ( <div > { keyList } </div>
        )
    }
}

export default Button