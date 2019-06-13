import React from 'react';
import comming_soon from '../../../asset/coming-soon.jpg';
import { Link } from 'react-router-dom';
import './Planet.css';

export default function Planet({ planet, fetchChar, fetchMoreUrl, idx, name}) {
    return (
        <div className="ui card">
            <div className="row">
                <div className="by">
                    <strong><p>{idx + 1}</p></strong>
                </div>
            </div>
            <div className="card_container">
                {planet.img ? "" : <img className="ui image" src={comming_soon} alt={planet}/>}
            </div>
            <div className="extra content">
                <div className="ui one buttons ">
                    <Link 
                        to="/"
                        className="ui basic button green"
                        // onClick={() => fetchMoreUrl(planet)}
                    >Planet</Link>
                    
                </div>
            </div>
        </div>
    )
}
