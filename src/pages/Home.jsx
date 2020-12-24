import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHeroes } from '../store/actions/heroesAction'
import Heroes from '../components/Heroes'

export default () => {
  const dispatch = useDispatch()
  const { heroes } = useSelector((state) => state)


  console.log(heroes, '<<<<< ini data heroes di page home')

  useEffect(() => {
    dispatch(getHeroes())
  }, [])


  return (
    <div className="container" style={{width: "90%"}}>
      <div className="row">
        {heroes?.map(hero => {
          return <Heroes hero={hero} key={hero.id} />
        })}
      </div>
    </div>
  )
}