import React from 'react'
import './Card.css'

const Card = ({each}) => {
    // console.log(each)
  return (
    <div className='card'>
        <h2>{each.name}</h2>
        <div className='project-links-box'>
            <a href={each.source_code} className="source-code-button">Source Code</a>
            <a href={each.hosted_link} className="hosted-link-button">Hosted Link</a>
        </div>
    </div>
  )
}

export default Card