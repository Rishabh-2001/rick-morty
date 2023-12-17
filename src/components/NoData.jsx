import React from 'react'
import nodata from '../assets/no-results.png'
import nodataStyle from '../style/NoData.module.css'

const NoData = () => {
  return (
    <div className={nodataStyle?.nodataCont}>
        <div>
            <img src={nodata} alt='no-data' width={200} style={{margin:"0 auto"}}  />
        </div>
        <p style={{fontSize:"1.5rem", textAlign:"center" }} >No Data Found</p>
    </div>
  )
}

export default NoData