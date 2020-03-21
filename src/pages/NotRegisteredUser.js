import React from 'react'
import Context from '../Context'
import {UserForm} from '../components/UserForm'

export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {
        ({activateAuth}) => {
          return(
            <React.Fragment>
              <UserForm onSubmit={activateAuth} title={`Registrarse`}  />
              <UserForm onSubmit={activateAuth} title={`Iniciar sesión`} />
            </React.Fragment>
          )
        }
      }
    </Context.Consumer>
    
  )
}
