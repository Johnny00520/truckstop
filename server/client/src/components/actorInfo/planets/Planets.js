import React from 'react';
import { Link } from 'react-router-dom';
import comming_soon from '../../../asset/coming-soon.jpg';

export default function Planets({ planet, name, fetchMoreUrl, idx}) {
    return (
        <div className="ui card">
            <p>{idx + 1}</p>
            <img src={comming_soon} className="ui image" alt="name" />
            <div className="extra content">
                <div className="ui one buttons ">
                    <Link 
                        to={`/planet/${name}`}
                        className="ui basic button green"
                        onClick={() => fetchMoreUrl(planet)}
                    >Planet</Link>
                </div>
            </div>
        </div>
    )
}
