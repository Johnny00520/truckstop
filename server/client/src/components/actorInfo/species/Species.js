import React from 'react';
import { Link } from 'react-router-dom';
import comming_soon from '../../../asset/coming-soon.jpg';
import './Species.css';

export default function Species({ name, speciy, fetchMoreUrl, idx}) {
    return (
        <div className="ui card">
            <p>{idx + 1}</p>
            <img src={speciy.img ? "#" : comming_soon} className="ui image"  alt="name" />
            <div className="extra content">
                <div className="ui one buttons ">
                    <Link 
                        // to={`/data/${name}/${encodeURIComponent(film)}`}
                        to={`/speciy/${name}`}
                        className="ui basic button green"
                        onClick={() => fetchMoreUrl(speciy)}
                    >Speciy</Link>
                </div>
            </div>
        </div>
    )
}
