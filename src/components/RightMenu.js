import React, { Component } from 'react'
import { ContextMenu, MenuItem } from "react-contextmenu"

export default class RightMenu extends Component {
    
    render(){
        const {clipboard, id, handleClick } = this.props
        return (
            <ContextMenu id={id}  >
                <MenuItem  data={{ type: 'COPY' }} onClick={handleClick}> Copy </MenuItem>
                <MenuItem data={{ type: 'CUT' }} onClick={handleClick}> Cut </MenuItem>
                { clipboard && <MenuItem data={{ type: 'PASTE' }} onClick={handleClick}> Paste </MenuItem> }
            </ContextMenu>
        )
    }
}