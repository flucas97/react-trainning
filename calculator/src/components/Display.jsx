import React from 'react'
import './Display.css'

export default props => {
    let display = ''
    if( props.total != '') { 
        display = props.total
    } else { 
        display =  props.leftHand + props.equation + props.rightHand
    }
    return( 
        <div className="display">
            { display }
        </div>
    )
}