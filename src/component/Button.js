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
            result: '',
            screenLength: [],
            canNotPrintPoint: true
        }
    }

    buttonNum(num, type) {
        if (type === 1 || type === 2) {
            if (!this.state.canNotPrintPoint && num === '.') return
            if (type === 2) {
                this.setState({canNotPrintPoint: true})
            }
            let numArray = this.state.num
            numArray.push(num)
            for (let i = 0; i < numArray.length; i++) {
                if (numArray[numArray.length - 1] === '.') return this.setState({canNotPrintPoint: false})
            }
            this.setState({num: numArray})
        }
        if (type === 3) {
            const num2 = this.state.num.toString().replace(/,/g, "").replace(/×/g, '*').replace(/÷/g, '/')
            this.props.showScreen(eval(num2))
        }
        if (type === 4) {
            if (this.state.num.length > 1) return this.state.num.length = 0
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
                    return <div className="buttons buttonsSymbol" key={ i }
                                onClick={() => this.buttonNum(item.num, item.type) }> { item.num } </div>
                case 4:
                    return <div className="buttons buttonsSymbol" key={ i }
                                onClick={() => this.buttonNum(item.num, item.type) }> { this.state.num.length > 1 ? 'AC' : item.num } </div>
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
