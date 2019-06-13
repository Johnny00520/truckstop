import React from 'react';
import { Link } from 'react-router-dom';
import comming_soon from '../../../asset/coming-soon.jpg';
import './Homeworld.css';

export default function Homeworld(props) {
    return (
        <div className="ui centered card">
            <img src={props.img ? "#" : comming_soon} className="ui image" alt="name" />
            <div className="extra content">
                <div className="ui one buttons ">
                    <Link 
                        to={`/homeworld/${props.name}`}
                        className="ui basic button green"
                        onClick={() => props.fetchMoreUrl(props.homeworld)}
                    >Homeworld</Link>
                </div>
            </div>
        </div>
    )
}
