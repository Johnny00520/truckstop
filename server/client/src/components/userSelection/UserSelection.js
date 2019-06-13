import React from 'react';
import MovieCards from './movieCard/MovieCards';
import PropTypes from 'prop-types';
import './UserSelection.css';

const UserSelection = ({ characters, fetchChar }) => {
    const emptyList = (
        <span className="words">
            <p>There is no movie in your collection</p>
        </span>
    )

    const movieList = (
        <div className="ui container">
            <div className="ui four stackable cards">
                { characters.map((character, index) => 
                    <MovieCards
                        key={character.url}
                        selectTarget={fetchChar} 
                        char={character}
                        index={index}
                    />    
                )}
            </div>
        </div>
    )

    return (
        <div className="user-selection-page">
            <h1 className="title">
                <strong><p className="title-info">Characters List</p></strong>
            </h1>
            { characters.length === 0 ? emptyList : movieList }
        </div>
    )
}

UserSelection.propTypes = {
    characters: PropTypes.array
}

export default UserSelection;


