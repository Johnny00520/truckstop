import React from 'react';
import timeConverter from '../../timeConver/timeConver';
import Films from '../../actorInfo/films/Films';
import People from '../../actorInfo/people/People';
import { Link } from 'react-router-dom';
import './Planet.css';

export default function Planet(props) {
    const { info, isLoading } = props.characters;
    const { name } = props.match.params;

    let createdUTCstring = new Date(info ? info.created : "").toUTCString();
    let createdDateTime = new Date(createdUTCstring).toDateString().split(" ");
    let newCreateDateTime = timeConverter(createdDateTime).join(" ");

    let editedUTCstring = new Date(info.edited).toUTCString();
    let editedDateTime = new Date(editedUTCstring).toDateString().split(" ");
    let newEditedDateTime = timeConverter(editedDateTime).join(" ");

    const loading = (
        <div className="loading-show">
            <div className="ui active inverted dimmer">
                <div className="ui text loader">Preparing Files...</div>
            </div>
        </div>
    )

    const planetRender = (
        <div className="planet-page-container">
            <div className="info-container">
                <div className="planet-name">
                    <strong><h1>{info.name}</h1></strong>
                </div>
                <div className="ui divider"></div>

                <div className="time-info">
                    <strong><h4><i>Created Time: {newCreateDateTime}</i></h4></strong>
                    <strong><h4><i>Edited Time: {newEditedDateTime}</i></h4></strong>
                </div>

                <div className="ui divider"></div>

                <div className="basic-info">
                    <strong><h3>Diameter: {info.diameter}</h3></strong>
                    <strong><h3>Climate: {info.climate}</h3></strong>
                    <strong><h3>Orbital Period: {info.orbital_period}</h3></strong>
                    <strong><h3>Rotation Period: {info.rotation_period}</h3></strong>
                    <strong><h3>Gravity: {info.gravity}</h3></strong>
                    <strong><h3>Surface Water: {info.surface_water}</h3></strong>
                    <strong><h3>Population: {info.population}</h3></strong>
                    <strong><h3>Terrain: {info.terrain}</h3></strong>
                </div>

                <div className="ui divider"></div>

                <div className="btn-format">
                    <div className="ui one buttons ">
                        <Link 
                            to="/"
                            className="ui huge inverted olive button"
                        >Home</Link>
                    </div>
                </div>

                <div className={info.residents && info.residents.length ?
                    "data-info" : "data-info-hidden" }>
                    <div className="ui divider"></div>
                    <div className="caragory-title">
                        <strong><i>Residents</i></strong>
                    </div>
                </div>
                <div className="ui container">
                    <div className="ui three stackable cards">
                        {info.residents && info.residents.length ? info.residents.map((resident, idx) => 
                            <People 
                                key={resident} 
                                person={resident} 
                                name={name}
                                idx={idx}
                                fetchMoreUrl={props.fetchMoreUrl}
                            />    
                        ): ""}
                    </div>
                </div>

                <div className={info.films && info.films.length ?
                    "data-info" : "data-info-hidden" }>
                    <div className="ui divider"></div>
                    <div className="caragory-title">
                        <strong><i>Films:</i></strong>
                    </div>
                </div>
                <div className="films-block">
                    <div className="ui three column stackable cards">
                        { info.films && info.films.length ? info.films.map((film, idx) => 
                            <Films 
                                key={film} 
                                film={film} 
                                name={name}
                                idx={idx}
                                fetchMoreUrl={props.fetchMoreUrl}
                            />) : "" }
                    </div>
                </div>

            </div>
        </div>
    )

    return (
        <div className="planet-page">
            { isLoading ? loading : planetRender}
        </div>
    )
}
