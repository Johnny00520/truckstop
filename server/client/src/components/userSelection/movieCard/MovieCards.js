import React from 'react';
import comming_soon from '../../../asset/coming-soon.jpg';
import { Link } from 'react-router-dom';
import './MovieCard.css';

let colors = ['red', 'violet', 'purple', 'brown']

const MovieImg = ({ char, selectTarget, index }) => {
    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    
    const newOrder = shuffle(colors);
    return (
        <div className={`ui ${newOrder[index]} card`}>
            <div className="card-wrapper">
                {char.img ? 
                    <img 
                        className="ui image"
                        src={char.img_url} 
                        alt=""/> : 
                    <img 
                        className="ui image"
                        src={comming_soon} 
                        alt="Cover"
                    />
                }

            </div>
            <div className="content">
                <div className="header">{char.name}</div>
            </div>
            <div className="extra content">
                <div className="ui one buttons ">
                    <Link 
                        to={`/actor/${char.name}`} 
                        className="ui basic button green"
                        onClick={() => selectTarget(char.name)}
                    >Information</Link>
                </div>
            </div>
        </div>
    )
}

export default MovieImg;