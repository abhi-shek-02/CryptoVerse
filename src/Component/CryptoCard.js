import React from 'react'
import './CryptoCard.css'
import millify from 'millify'
const CryptoCard = ({ rank, name, imgx, price, marketCap, change }) => {
  return (
    <div className="main-card-cont">
      <div className='same5'>
        <nav className="card-nav">
          <div className="card-nav2">
            <h4>{rank}.</h4>
            <h4><span className="color">{name.length > 12 ? `${name.substring(0, 12)}...`
          : name
        }</span></h4>
          </div>
          <img className="card-navimg" src={imgx} alt="error" />
        </nav>
        {/* <div className="underline"></div> */}
        <div className="last-cont">
          <p>Price : $ {millify(price)}</p>
          <p>Market Cap : {millify(marketCap)}</p>
          <p>Daily Change : {millify(change)} </p>
        </div>
      </div>
    </div>
  )
}

export default CryptoCard





{/* 



<p>Price: {millify(currency.price)}</p>
        <p>Market Cap: {millify(currency.marketCap)}</p>
        <p>Daily Change: {millify(currency.change)}</p> */}