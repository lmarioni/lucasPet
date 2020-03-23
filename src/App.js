import React, { useContext, Suspense } from 'react';
import {GlobalStyle} from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Detail } from './pages/Detail'
import {Home} from './pages/Home'
import {NavBar} from './components/NavBar'
import { Router, Redirect } from '@reach/router'

import { User } from './pages/User'

import { NotFound } from './pages/NotFound'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

import {Context}  from './Context'

const Favs = React.lazy(() => import('./pages/Favs'))

export const App = () => {
const {isAuth} = useContext(Context)
console.log(isAuth)

  return(
    <Suspense fallback={<div />}>
      <GlobalStyle />
    <Logo />
    <Router>
          <NotFound default />
          <Home path='/' />
          <Home path='/pet/:categoryId' />
          <Detail path='/detail/:detailId' />
          {!isAuth && <NotRegisteredUser path='/login' /> }
          {!isAuth && <Redirect noThrow from='/favs' to='/login' /> }
          {!isAuth && <Redirect noThrow from='/user' to='/login' /> }
          {isAuth && <Redirect noThrow from='/login' to='/' /> }
          <User path='/user' />
          <Favs path='/favs' />
    </Router>
   <NavBar />
  </Suspense>
  )
}
