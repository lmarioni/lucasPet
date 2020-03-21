import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCard'

export const Home = ({categoryId}) => {
  return (
    <React.Fragment>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={categoryId} />
    </React.Fragment>
  )
}
