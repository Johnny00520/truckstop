import React from 'react';
import { Link } from 'react-router-dom';
import comming_soon from '../../../asset/coming-soon.jpg';
import './Vehicles.css';

export default function Vehicles({ vehicle, name, fetchMoreUrl, idx}) {
    return (
        <div className="ui card">
            <p>{idx + 1}</p>
            <img src={vehicle.img ? "#" : comming_soon} className="ui image" alt="name" />
            <div className="extra content">
                <div className="ui one buttons ">
                    <Link 
                        // to={`/data/${name}/${encodeURIComponent(film)}`}
                        to={`/vehicle/${name}`}
                        className="ui basic button green"
                        onClick={() => fetchMoreUrl(vehicle)}
                    >Vehicle</Link>
                </div>
            </div>
        </div>
    )
}
