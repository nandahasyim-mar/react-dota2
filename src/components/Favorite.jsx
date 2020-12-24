import React from 'react'
import './Favorite.css'

export default (props) => {
  const { favorite } = props
  return (
    <div className="blog-post">
      <div className="blog-post_img">
        <img src={`http://cdn.dota2.com/` + favorite?.img} alt="" />
      </div>
      <div className="blog-post_info">
        {favorite.roles.map((tag, index) => (
          <div className="chip" style={{ backgroundColor: "black", color: "#bdc3c7", borderRadius: "0.3rem"}} key={index}>
            {tag}
          </div>
        ))}
        <h1 className="blog-post_title">{favorite?.localized_name}</h1>
        {/* <p className="blog-post_text">
          {favorite?.overview}
        </p> */}
        <p className="blog-post_pop">{favorite?.attack_type}</p>
      </div>
    </div>
  )
}