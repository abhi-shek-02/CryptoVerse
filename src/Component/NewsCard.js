import './NewsCard.css'
import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from "axios";
import moment from 'moment'


const NewsCard = ({ title, description, datePublished, name, imgx, icon }) => {

  return (
    <div className="news-cardmain">

      <div className="newsheader-iconz">
        <div className="newsheader"> <h5>{title.length > 60 ? `${title.substring(0, 60)}...`
          : title
        }</h5> </div>
        <img src={imgx} alt="" className="iconz" />
      </div>
      <div className='news-cardBody'>
        <p>{description.length > 100 ? `${description.substring(0, 100)}...`
          : description
        }
        </p>
      </div>

      <div className="footer">
        <img src={icon} alt="Errror" className="icon-footer" />
        <p className='same7'>{name} </p>
        <p className='same7'>{moment(datePublished).startOf('ss').fromNow()}</p>
      </div>
    </div>
  )
}

export default NewsCard
