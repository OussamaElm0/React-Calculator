import React from 'react';
import Result from './Result';
import Button from './Button';

export default function Operation(props){
    return (
      <div className="operation-section">
        <Result result={props.result} operation={props.operation} />
        <div className='buttons-section'>
          {props.btns.map((val, index) => {
            return (
              <Button
                value={val}
                id={val}
                key={index}
                onClick={props.onClick}
              />
            );
          })}
        </div>
      </div>
    );
}