import React, {createContext, useState} from 'react';

export const Context = createContext();

const Provider = ({children}) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  });

  const [email, setEmail] = useState('')

  
  const value = {
      isAuth,
      email,
      activateAuth: (token, email = '') => {
        setIsAuth(true)
        window.sessionStorage.setItem('token',token)
        setEmail(email)
      }
  }

  return(
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
};
