import React from 'react';
import { Link } from 'react-router-dom';
import comming_soon from '../../../asset/coming-soon.jpg';
import './Films.css';

const Films = ({ film, name, fetchMoreUrl, idx }) => {
    return (
        <div className="ui card">
            <p>{idx + 1}</p>
            <img src={film.img ? "#" : comming_soon} className="ui image" alt="name" />
            <div className="extra content">
                <div className="ui one buttons ">
                    <Link 
                        to={`/film/${name}`}
                        className="ui basic button green"
                        onClick={() => fetchMoreUrl(film)}
                    >Film</Link>
                </div>
            </div>
        </div>
    )
}

export default Films;