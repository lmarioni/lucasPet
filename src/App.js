import React from 'react';
import {GlobalStyle} from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Detail } from './pages/Detail'
import {Home} from './pages/Home'
import {NavBar} from './components/NavBar'
import { Router } from '@reach/router'

import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

import Context  from './Context'


export const App = () => {

  return(
    <div>
      <GlobalStyle />
    <Logo />
    <Router>
          <Home path='/' />
          <Home path='/pet/:categoryId' />
          <Detail path='/detail/:detailId' />
    </Router>
    <Context.Consumer>
      {
        ({isAuth}) => 
        isAuth ? <Router>
            <User path='/user' />
            <Favs path='/favs' />
        </Router>
        : <Router>
            <NotRegisteredUser path='/favs' />
            <NotRegisteredUser path='/user' />  
        </Router>
      }
    </Context.Consumer>
   <NavBar />
  </div>
  )
}
