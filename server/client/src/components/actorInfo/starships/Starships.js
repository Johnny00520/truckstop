import React from 'react';
import { Link } from 'react-router-dom';
import comming_soon from '../../../asset/coming-soon.jpg';
import './Starships.css';

export default function Starships({ starship, name, fetchMoreUrl, idx}) {
    return (
        <div className="ui card">
            <p>{idx + 1}</p>
            <img src={starship.img ? "#" : comming_soon} className="ui image" alt="name" />
            <div className="extra content">
                <div className="ui one buttons ">
                    <Link 
                        // to={`/data/${name}/${encodeURIComponent(film)}`}
                        to={`/starship/${name}`}
                        className="ui basic button green"
                        onClick={() => fetchMoreUrl(starship)}
                    >StarShip</Link>
                </div>
            </div>
        </div>
    )
}
