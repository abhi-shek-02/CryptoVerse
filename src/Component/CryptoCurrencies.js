import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import CryptoStats from './CryptoStats'
import CryptoCard from './CryptoCard'
import './CryptoCurrencies.css'
const CryptoCurrencies = () => {

  const [val1, setVal1] = useState();


  useEffect(() => {
    axios.request(options1).then(function (response) {
      setVal1(response.data.data.coins);
      // console.log(response.data.data.coins);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);

  console.log(val1);
  const options1 = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
    headers: {
      'X-RapidAPI-Key': '5927ae0c0fmsh3118165e0831ea1p125679jsnad94db138a94',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };
  const [remarray, setremarray] = useState();
  const [remarrayx, setremarrayx] = useState();
  const [inputdata, setInputdata] = useState('')

  const handler = () => {

    setremarrayx([...val1])
    const remainingarray = val1.filter((currency) => {
      return currency.name == inputdata
    })
    setVal1([...remainingarray])
    return remainingarray
  }
  const handlerReset = () => {
    setVal1([...remarrayx])
  }
  return (
    <div className="CryptoCurrencies-main">
      <CryptoStats />
      <div className='header-cont'>
        <h1 style={{ color: '#405cf5' }}>Top 50 Cryptocurrencies in the world</h1>
        <div className="linex"></div>

      </div>
      <div className='inputbox-cont'>
        <input type="text" placeholder="Search Coins.. " className='Giveinput' onChange={(e) => { setInputdata(e.target.value) }} />
        <button className='input-btn' onClick={handler}>Search</button>
        <button className='input-btn' onClick={handlerReset}>Reset</button>
      </div>

      <div className="centers">
        <div className="main-crypto-cont2">
          {
            val1?.map((currency) => {
              return (
                <CryptoCard
                  key={currency.id}
                  rank={currency.rank}
                  name={currency.name}
                  imgx={currency.iconUrl}
                  price={currency.price}
                  marketCap={currency.marketCap}
                  change={currency.change}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default CryptoCurrencies

