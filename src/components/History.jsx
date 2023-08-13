import React from 'react';

export default function History(props) {

    return (
      <div className="history-section">
        {props.history.map((oprt, index) => {
          return (
            <div className="history-div" key={index}>
              <div className="history-result">{oprt.re}</div>
              <div className="history-operation">{oprt.op}</div>
            </div>
          );
        })}
      </div>
    );
}