import React from 'react'
import { Image, Grid, Link } from './styles'
import PropTypes from 'prop-types'

export const ListOfFavs = ({favs = []}) => {

  return (
    <Grid>
      {favs.map((fav, key) => {
        return(
        <Link key={key} to={`/detail/${fav.id}`}>
          <Image key={key} src={fav.src} />
        </Link>
        )
      })}
    </Grid>
  )
}

ListOfFavs.PropTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string
    })
  )
}
