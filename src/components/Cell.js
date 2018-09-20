import React, { Component } from 'react'
import { ContextMenuTrigger } from "react-contextmenu"
import RightMenu from './RightMenu'

export default class Cell extends Component {
    state={
        selected: ""
    }
    handleChange(event){
        const { updateValue } = this.props
        const { value }= event.target
        updateValue(value)
    }
    handleClick(event){
        event.target.select()
        this.setState({
            selected: event.target.value
        })
    }
    handleRightClick(event,data){  
        if(data.type === 'COPY'){
            this.props.copy(this.state.selected)
        } else if (data.type === 'CUT') {
            this.props.cut(this.state.selected)
        } else if (data.type === 'PASTE') {
            this.props.paste(this.props.rowNumber, this.props.colNumber)
        }
    }
    render(){
        const { rowNumber, colNumber } = this.props
        return (       
            <td className="td">
                <ContextMenuTrigger id={`${rowNumber}-${colNumber}`}>
                    <input 
                        className='cell'
                        value={this.props.value}
                        onChange={this.handleChange.bind(this)}
                        onClick={this.handleClick.bind(this)}
                    />
                </ContextMenuTrigger>
                <RightMenu 
                    id={`${rowNumber}-${colNumber}`}
                    clipboard={this.props.clipboard}
                    handleClick={this.handleRightClick.bind(this)}
                />
            </td>
        )
    }
}