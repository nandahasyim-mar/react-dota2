import React from 'react'
import { useDispatch } from 'react-redux'
import { addFavorite } from '../store/actions/favoriteAction'

export default (props) => {
  const { hero } = props
  const dispatch = useDispatch()

  const handleFavorite = (data) => {
    console.log(data, '<<<<< ini favorite di halaman heroes');
    dispatch(addFavorite(data))
  }
  return (
    <div className="col s2 m2">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <a onClick={() => handleFavorite(hero)} class="halfway-fab btn-floating waves-effect waves-light" style={{ top: "2%", left: "2%", background: "none", boxShadow: "0 0 0" }}><i className="material-icons" style={{color: "#ffd32a"}}>star_outline</i></a>
          <img className="activator" src={ `http://cdn.dota2.com/` + hero.img } />
        </div>
          <div className="card-content" style={{ padding: '0.7rem 1.2rem', backgroundColor: "#060606", color: "#fff"}}>
            <span className="card-title activator text-darken-4" style={{ fontSize: "1.1rem", color: "#fff"}}>{hero.localized_name}</span>
            <p>{hero.attack_type}</p>
          </div>
      </div>
    </div>
  )
}