import React from 'react';
import comming_soon from '../../../asset/coming-soon.jpg';
import './MovieCard.css';

const MovieImg = ({ char, selectTarget, value }) => {
    // debugger
    return (
        
        <div className="ui card">
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
                        value={value}
                        onClick={() => selectTarget(char.name)}/>
                }
                <h3>{char.name}</h3>
            </div>
        </div>
    )
}

export default MovieImg;