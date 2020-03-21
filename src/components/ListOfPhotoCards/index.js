import React from 'react'
import { PhotoCard } from '../PhotoCard'

const withPrueba = [{
  'lucas': 'marioni'
}]


export const ListOfPhotoCardsComponent = ({data : {photos = []}} = {} ) => {
  
  return(
    <ul>
      {photos.map((photo) => <PhotoCard key={photo.id} {...photo} /> )}
    </ul>
  )
}

