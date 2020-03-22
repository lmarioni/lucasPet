import React, { useContext } from 'react'
import {Context} from '../Context'


export const Favs = () => {
  const { email } = useContext(Context)
 
  return (
    <div>
      <h1>fav: {email}</h1>
    </div>
  )
}
