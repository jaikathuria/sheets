import React, { Component } from 'react'
import Cell from './Cell'


export default class Row extends Component {
    render(){
        const { numberOfColumns, values, updateValue, rowNumber, copy, cut} = this.props
        let cells = []
        if (values){
            for(let i = 0; i < numberOfColumns; i++) {
                cells.push(<Cell
                                value={values[i] }
                                key={i}
                                rowNumber={rowNumber}
                                colNumber={i}
                                updateValue={(value) => { updateValue(i, value) }}
                                copy={(value) => { copy(value) }}
                                cut={(value)=>{ cut(i, value) }}
                                paste={this.props.paste}
                                clipboard={this.props.clipboard}
                           />)
            }
        } 
        return(
            <tr>
                { cells }
            </tr>
        )
    }
}