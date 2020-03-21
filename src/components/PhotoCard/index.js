import React, { useEffect, useRef, useState, Fragment } from "react";
const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";
import { ImgWrapper, Img, Article } from "./styles";

import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

import { FavButton } from '../FavButton'

import { ToggleLikeMutation} from '../../container/ToggleLikeMutation'

import {Link} from '@reach/router'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
 const [show, element] = useNearScreen();
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);

  

  return (
    <Article ref={element}>
      {show && (
        <React.Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                 !liked && toggleLike({variables: {
                   input: {id}
                 }})
                  setLiked(!liked)
                }
                return(
                  <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
                )
              }
            }
          </ToggleLikeMutation>
        </React.Fragment>
      )}
    </Article>
  );
};
