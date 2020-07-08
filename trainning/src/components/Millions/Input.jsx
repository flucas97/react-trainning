import React from 'react'
import './Millions.css'

export default props => {     
    const newRange = (input) => {
        return +input.target.value
    }

    return(
        <>
             <p className="input"> How many numbers? </p>
             <input onChange = { 
                 input => { props.setRange(newRange(input)) }} 
                 value = { props.actualRange }
            />
        </>
    )
}