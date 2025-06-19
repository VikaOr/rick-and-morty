import React from 'react'
import './CharactersCards.css'

export default function CharactersCards(props) {
  let elem = props.props;
  
  
  return (
    <div>
      <div className="card-container">
      <div className="card-title">{elem.name}</div>
        <div className="card-img">
          <img src={elem.image} alt="" />
          <div className="card-info">
          <div className="card-subtitle">Specie <span className='card-text'>{elem.name}</span></div>
          <div className="card-subtitle">State <span className='card-text'>{elem.status}</span></div>
          <div className="card-subtitle">Location <span className='card-text'>{elem.location.name}</span></div>
        </div>
        </div>
        
      </div>
    </div>
  )
}
