import React from "react";
import dataUser from "./UserData";

const Card = () => {
    return (
        <div className="cards">
            {dataUser.map((item) => {
                let badgeChecker;
                if (item.openSpots === 0) {
                    badgeChecker = "SOLD OUT";
                } else if (item.location === "Online") {
                    badgeChecker = "ONLINE";
                }
                return (
                    <div className="card--details" key={item.id}>
                        {badgeChecker && <div className="card--badge">{badgeChecker}</div>}
                        <img src={item.coverImg} className="card--img" alt="" />
                        <div className="card-stats">
                        <img src='/star.png' className="star--rating" />
                            <h1 className="rating">{item.stats.rating}</h1>
                            <span className="review-count">({item.stats.reviewCount})</span>
                            <span className="location--card">{item.location}</span>
                        </div>
                        <p className="title">{item.title}</p>
                        <h2 className="price-details">From $ {item.price} / person</h2>
                    </div>
                );
            })}
        </div>
    );
};

export default Card;
