import logo from './logo.svg';
import { useState, createContext } from 'react';
import Counter from './Components/Counter';
import './App.css';
export const AppContext = createContext();



function App() {
  const [counter, setCounter] = useState(0); 
  
  const [log, setLog] = useState([]); 
  
  
  const btnClick = (count) => {
     var newLog = [... log];
     newLog.push({count: count, time: new Date()});
      setLog(newLog);
      console.log(log);
      
  };

  const reset = () => {
    console.log("reset");
    setLog([]);
    
     
 };


  return (
    <div className="App">
      <div className="keyboard">
        
          
          <div className="button" onClick={() => btnClick(1)}>1</div>
          <div className="button" onClick={() => btnClick(2)} >2</div>
          <div className="button" onClick={() => btnClick(3)} >3</div>
        
          <div className="button" onClick={() => btnClick(4)} >4</div>
          <div className="button" onClick={() => btnClick(5)} >5</div>
          <div className="button" onClick={() => btnClick(6)}>6</div>
        
          <div className="button" onClick={() => btnClick(7)} >7</div>
          <div className="button" onClick={() => btnClick(8)} >8</div>
          <div className="button" onClick={() => btnClick(9)} >9</div>
       
          <div className="button" onClick={() => btnClick(10)} >10</div>
          <div className="button" onClick={reset}>RESET</div>
       
      </div>
      <div className="counterPane">
      <AppContext.Provider  value = {{counter, setCounter, log, setLog}}>
          <Counter />
          </AppContext.Provider>
          
      </div>
    </div>
  );
}

export default App;
