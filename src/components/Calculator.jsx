import React, {useEffect, useState} from 'react';
import Operation from './Operations';
import History from './History';
import Footer from './Footer';

export default function Calculator() {
    const [result,setResult] = useState(0);
    const [operation,setOperation] = useState("");
    const [history,setHistory] = useState([])
    const btns = [
      ".",
      "C",
      "␡",
      "/",
      "7",
      "8",
      "9",
      "*",
      "4",
      "5",
      "6",
      "-",
      "1",
      "2",
      "3",
      "+",
      "(",
      "0",
      ")",
      "=",
    ];

    const handleClick = (e) => {
        const {value} = e.target;
        switch (value) {
          default: // write the value of the button on the operation
            setOperation((prev) => {
              return prev + value;
            });
            break;
          case "=": //set the operation and result on the history
            setHistory((prev) => {
              return [
                ...prev,
                {
                  op: operation, //operation
                  re: result, //result
                },
              ];
            });
            setOperation("");
            console.log(history);
            break;
          case "C": // clear allthing
            setOperation("");
            setResult(0);
            break;
          case "␡": // delete only the last thing was wrote on the operation
            setOperation((prev) => {
              return prev.slice(0, -1);
            });
            break;
        }
    }
    useEffect(() => {
        try{
            let res = eval(operation);
            setResult(res);
        }catch(e){
            console.error(e);
        }
    },[operation]);
   
    return (
      <>
        <div className='calculator'>
            <Operation 
                btns = {btns} 
                result = {result}
                operation = {operation}
                onClick = {handleClick}
            />
          <History history={history} />
        </div>
        <Footer />
      </>
    );
}