import React from 'react'

const HorizontalBar = (props) => {
    return (
        <div className='horizontalBar'> 
            <div className='filler' style={{ width: `${props.percentage}%`}}>
                {props.percentage}
            </div>
        </div>

    )
}

export default HorizontalBar