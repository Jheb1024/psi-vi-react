import React ,{useState}from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'; 

function CardPsicologo({psico}) {
  const [user, setUser] = useState(psico);
  let navigate = useNavigate();
  console.log(psico.nombre)
  return (
    <div className='card text-center m-2 mt-3 mb-3 shadow p-3 mb-5 bg-white rounded' >  
        <img src='' alt=''/>
        <div className="card-body">
            <h4 className='card-title'>{psico.nombre}</h4>
            <p>
                {psico.decisionPsicologo}
            </p>
            <p>
              Cédula: {psico.cedula}
            </p>
            <Link className='btn btn-outline-secondary' to='/'>Ver Perfil completo</Link>
            <Button
      variant="primary">

     <Link to={'/public/perfilcompleto/user'} state={{data:user}}>Ver perfil completo</Link>
    </Button>
        </div>
    </div>
  )
}

export default CardPsicologo