import React, {useContext, useEffect} from 'react'
import { AppContext } from '../App';
    

function Counter() {
    const {counter, setCounter, log, setLog} = useContext(AppContext);
    const refreshInterval = 1000;
    const activeTimeoutMinutes = 30;
    const trimLog = () =>{
       
       
        const newLog = [...log.filter(x => { 
            return x.time >(new Date() - activeTimeoutMinutes*60000) }) ];
        if (newLog.length < log.length){
            setLog(newLog);
        }

        

        

    }; 

    useEffect(() => {
    if (refreshInterval && refreshInterval > 0) {
      const interval = setInterval(trimLog, refreshInterval);
      
      return () => clearInterval(interval);
    }
  }, [refreshInterval,log]); 


    useEffect(() => {
        var c=0;
    
        log.forEach(element => {
            c+= element.count;
        });
        setCounter(c);
    }, [log]); 
  return (
     <div>
        <div className='counter'>{counter}</div>
        <div className='counterFooter'> menus in past {activeTimeoutMinutes} minutes</div>
        <div className='menus'> 
            {log.map(element => (
                <div className='logItem'> {element.count}  @ {element.time.getHours()}:{element.time.getMinutes()} </div>


            ))}
        </div>
    </div> 

  )
}

export default Counter