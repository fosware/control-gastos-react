import {useState} from 'react'
import Mensaje from './Mensaje';


const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

    const [mensaje, setMensaje ] = useState('');

    const handlePresupuesto = (e) => {
        e.preventDefault();
        if(!Number(presupuesto) || Number(presupuesto) <0 ){
            setMensaje('No es un presupuesto válido');
            setIsValidPresupuesto(false)
            return 
        } 
        
        setMensaje('');
        setIsValidPresupuesto(true)
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form onSubmit={handlePresupuesto} className='formulario'>
        <div className='campo'>
            <label htmlFor="">Definir Presupuesto</label>
            <input 
                className='nuevo-presupuesto'
                
                placeholder='Agrega tu presupuesto'
                type="text" inputmode="numeric" pattern="[0-9]*"
                value={presupuesto}
                onChange={ e => setPresupuesto( Number(e.target.value ) )}
             />
             <input type="submit" value="Agregar" />
             { mensaje && <Mensaje tipo='error'>{mensaje} </Mensaje> }
        </div>
      </form>
    </div>
  )
}

export default NuevoPresupuesto
