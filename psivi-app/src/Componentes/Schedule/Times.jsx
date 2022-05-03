import React, { useState } from 'react'
import LoginRegisterModal from '../LoginRegisterModal/LoginRegisterModal';
const time=['08:00','09:00','10:00','14:00','15:00'];





function Times(props) {
    const [event, setEvent] = useState(null);
    const [info, setInfo] = useState(false);

    function displayInfo(e){
        setInfo(true);
        setEvent(e.target.innerText);
    }

    return (
    <div className='times'>
        {time.map(times=>{
            return(
                <div>
                    <button onClick={(e)=>displayInfo(e)}>{times}</button>
                </div>
            )
        })}
        <div>
            {info? `Horario de cita: ${event} ${ props.date.toDateString()}`: null}
            <LoginRegisterModal fecha={props.date} time={event}></LoginRegisterModal>
        </div>
    </div>
  )
}

export default Times