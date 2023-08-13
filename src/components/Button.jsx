import React from 'react';

export default function Button(props) {
    return (
        <>
            <button 
                onClick={e => {
                    props.onClick(e)
                }}
                className='btn'
                value={props.value}
                id= {props.value === "+" ? "addiction" : props.value === "=" ? "equal" : props.id}
            >
                {props.value}
            </button>
        </>
    )
}