import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">M&M Automatización</Link>
            <div>
            {/* <NavLink className="btn btn-primary mr-3" to="/" exact>
                Inicio
            </NavLink> */}

            {<NavLink className="btn btn-primary" to="/login" exact>
                Iniciar sesión
            </NavLink>}
            </div>
        </div>
        
    )
}

export default Navbar

