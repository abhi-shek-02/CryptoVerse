import './News.css'
import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from "axios";
import moment from 'moment'
import contextimg from '../Img/logox.png'

import NewsCard from '../Component/NewsCard'
const News = () => {
  const [mynews, setmynews] = useState([]);
  useEffect(() => {
    axios.request(options).then(function (response) {
      setmynews(response.data.value);
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);
  console.log("News Choda" , mynews);
  // console.log(mynews.value);
  const options = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news/search',
    params: { textFormat: 'Raw', q:'crypto'},
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Key': '5927ae0c0fmsh3118165e0831ea1p125679jsnad94db138a94',
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    }
  };
  return (
    <div className="cont-news">
      <div className="header-news">
        <h1>Latest Crypto News</h1>
        <div className="lineu"></div>
      </div>
      <div className="news-box">
        {
          mynews?.map((item,i) => {
            return (
              < NewsCard
                key={i}
                title={item.name}
                description={item.description}
                datePublished={item.datePublished}
                name={item.provider[0]?.name}
                imgx={item?.image?.thumbnail?.contentUrl} 
                icon={item.provider[0]?.image?.thumbnail?.contentUrl || contextimg}
              />
            )
          })
        }
      </div>

    </div>
  )
}

export default News
              {/* <div></div> */ }
