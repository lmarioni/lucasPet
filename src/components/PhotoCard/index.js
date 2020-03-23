import React, { useContext } from "react";
const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";
import { ImgWrapper, Img, Article } from "./styles";

import { useNearScreen } from '../../hooks/useNearScreen'

import { FavButton } from '../FavButton'

import { ToggleLikeMutation} from '../../container/ToggleLikeMutation'

import {Link} from '@reach/router'

import {Context} from '../../Context'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
 const [show, element] = useNearScreen();
const {isAuth} = useContext(Context);
const disabled= isAuth ? false : true;
  return (
    <Article ref={element}>
      {show && (
        <React.Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
      <span></span>
          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                toggleLike({variables: {
                   input: {id}
                 }})
                }
                return(
                  <FavButton disabled={disabled} liked={liked} likes={likes} onClick={handleFavClick} />
                )
              }
            }
          </ToggleLikeMutation>
        </React.Fragment>
      )}
    </Article>
  );
};
