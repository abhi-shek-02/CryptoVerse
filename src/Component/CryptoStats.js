import React from 'react'
import './CryptoStats.css'
import millify from 'millify'
import axios from 'axios'
import { useEffect, useState } from 'react'
const CryptoStats = () => {
    const [val, setVal] = useState(null);
    useEffect(() => {
        axios.request(options).then(function (response) {
            setVal({ ...response.data.data.stats });
            console.log("xxxdsd", response.data.data.stats);
        }).catch(function (error) {
            console.error(error);
        });
    }, []);

    // console.log({val})
    const options = {
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
    return (
        <>
            <div className='stats-main-container'>
                <div className='stats-main-2container'>
                    <h1>Global Crypto Stats</h1>
                    <div className='stats-main-3container'>
                        <div className="same4">
                            <h3>Total Crypto</h3>
                            <div className="linexy"><h4>{val?.total}</h4></div>

                        </div>
                        <div className="same4">
                            <h3>Total Exchanges</h3>
                            <div className="linexy">
                                <h4>{val?.totalExchanges}</h4>
                            </div>
                        </div>
                        <div className="same4">
                            <h3>Total Market Cap</h3>
                            <div className="linexy"><h4>$ {val?.totalMarketCap}</h4></div>

                        </div>
                        <div className="same4">
                            <h3>Total 24h Volume</h3>
                            <div className="linexy"><h4>{val?.total24hVolume}</h4></div>

                        </div>
                        {/* <div className="same4">
                        <h3>Total Markets</h3>
                        <div className="line"></div>
                        <h4>{millify(val.totalMarkets)}</h4>
                    </div> */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default CryptoStats
