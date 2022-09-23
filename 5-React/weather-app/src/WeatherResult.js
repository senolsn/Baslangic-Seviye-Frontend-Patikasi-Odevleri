import React from 'react'
import './weather.css'
function Weatherresult({date,mintemp,maxtemp,icon,condition}) {
  return (
    <div className="result">
        <h2>{date}</h2>
        <ul>
            <li><img src={icon} alt="" /></li>
            <li>{condition}</li>    
            <li>{mintemp} C/ {maxtemp} C</li>
        </ul>
    </div>
  )
}

export default Weatherresult