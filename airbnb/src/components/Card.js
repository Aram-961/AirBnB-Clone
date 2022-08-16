import React from 'react'
import dataUser from './UserData'

const Card = () => {
    return (
        <div className='cards'>
            {
                dataUser.map((item, index) => (
                    <div class="card--details" key={index}>
                        <img src={item.coverImg} className="card--img" alt="" />
                        <div className='card-stats'>
                            <h1 className='rating'>{item.stats.rating}</h1>
                            <h2 class="review-count">({item.stats.reviewCount}) .online</h2>
                        </div>
                        <p className="title">{item.title}</p>
                        <h2 className="price-details">From $ {item.price} / person</h2>
                    </div>
                ))
            }
        </div>
    )
}

export default Card