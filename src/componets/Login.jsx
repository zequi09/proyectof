import React from 'react'
import '../estilos.css';
import Axios from 'axios'
import {NotificationManager} from 'react-notifications';
import { useHistory} from "react-router";


const Login = () => {


    const history = useHistory();
    const [email,setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')

    const procesarDatos = (e) => {
        e.preventDefault()
        if(!email.trim()){
            console.log('Ingrese Email')
            return
        }
        if(!pass.trim()){
            console.log('Ingrese Contraseña')
            return
        }
    }

    const register = () => {
        Axios.post('http://54.160.193.245:3002/register', {
          username: email,
          password: pass,
        }).then((response) => {
        })
        NotificationManager.success('Success message', 'Title here')
    }


    const login = () => {
        Axios.post('http://54.160.193.245:3002/login', {
          username: email,
          password: pass,
        }).then((response) => {
            console.log(response);
            if (response.data.length > 0) {
                NotificationManager.success('Usuario y contraseña validados', 'Ingreso exitoso')
                history.push("/home")
            } else {
                NotificationManager.error('Usuario y contraseña no validados', 'Ingreso fallido')
            }
        })
        
    }
    


    return (
        <div className="justify-content-center" style={{
            boxShadow:"2px 2px 2px 2px #adb5bd",
            borderRadius:"15px",
            /* width:"80%", */
            marginTop:"25rem",
            paddingBottom:"5px"
        }}>
            <div className="mt-5">
            <h1 className="text-center">Inicio de sesión</h1>
            <p className="justify-content-center" style={{textAlign: "center", fontSize:"1.3rem"}}>Estimado usuario, al momento de instalar su sistema se le entregó un correo y una contraseña para poder tener acceso a sus datos.</p>
            <hr />
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form onSubmit={procesarDatos}>
                        <input 
                        type="email" 
                        className="form-control mb-2"
                        placeholder="Ingrese su email"
                         onChange={e => setEmail(e.target.value)} 
                         value={email} 
                        />
                        <input 
                        type="password" 
                        className="form-control mb-2"
                        placeholder="Ingrese su contraseña"
                         onChange={e => setPass(e.target.value)}
                         value={pass} 
                        />
                        <button onClick={register} className="btn btn-primary btn-lg btn-block">Registrar</button>
                        <button onClick={login} className="btn btn-primary btn-lg btn-block">Ingresar</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login
