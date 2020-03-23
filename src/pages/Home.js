import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCard'
import { Helmet } from 'react-helmet'
import { Layout } from '../components/Layout'

 const HomePage = ({categoryId}) => {
  return (
    <Layout title='Mascota photos' subtitle='Fotos de animales domesticos'>
      <Helmet>

      </Helmet>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.id
} )

