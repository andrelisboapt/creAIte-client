import React, {useContext} from 'react'
import { AuthContext } from '../context/authContext'
import { Navigate } from 'react-router-dom'

function Anon({children}) {

    const {loading, loggedIn} = useContext(AuthContext)

    if(loading) return <p>Loading...</p>

    if(loggedIn) {
        return <Navigate to="/feed" />
    } else {
        return children;
    }

  
}

export default Anon