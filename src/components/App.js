import React, { Component } from 'react'
import Row from './Row'

export default class App extends Component {

    state = {
        grid: Array.apply(null, Array(this.props.numberOfRows)).map(() => Array.apply(null, Array(this.props.numberOfColumns)).map(String.prototype.valueOf,"")),
        clipboard: ""
    }

    cut(row,col,clipboard){
        const grid = Array.from(this.state.grid, row => [...row]) // Making Sure State remains Immutable 
        grid[row][col] = ""
        this.setState({
            grid,
            clipboard,
        })
    }

    copy(clipboard){
        this.setState({
            clipboard,
        })
    }

    paste(row,col){
        const grid = Array.from(this.state.grid, row => [...row]) // Making Sure State remains Immutable 
        grid[row][col] = this.state.clipboard
        this.setState({
            grid
        })
    }

    updateValue(row,col,value){
        const grid = Array.from(this.state.grid, row => [...row]) // Making Sure State remains Immutable 
        grid[row][col] = value
        this.setState({
            grid
        })
    } 

    render(){
        const { numberOfRows, numberOfColumns } = this.props
        const rows = []
        for( let i = 0; i < numberOfRows; i++ ){
            rows.push(
            <Row 
                numberOfColumns={numberOfColumns} 
                values={this.state.grid[i]}
                key={i}
                updateValue={(column, value) => {this.updateValue(i,column,value)}}
                cut={(column, value) => {this.cut(i,column, value)}}
                copy={(value) => {this.copy(value)}}
                paste={(row,col) => {this.paste(row,col)}}
                clipboard={this.state.clipboard}
                rowNumber={i}
            />)
                
        }
        
        return (
            <section className="wrapper">
                <table className="table">
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </section>
        )
    }
}