import React from 'react'
import { useSelector } from 'react-redux'
import Favorite from '../components/Favorite'

export default () => {
  const { favorites } = useSelector((state) => state)
  console.log(favorites);
  return(
    <div className="container">
      {favorites.map(favorite => {
        return <Favorite favorite={favorite} key={favorite.id}/>
      })}
    </div>
  )
}