import React from 'react';

export default function Result(props) {
    return (
        <div className='result'>
            <p className='current-operation'>
                {props.operation === "" ? 0 : props.operation}
            </p>
            <p className='current-result'>
                {props.result}
            </p>
        </div>
    )
}