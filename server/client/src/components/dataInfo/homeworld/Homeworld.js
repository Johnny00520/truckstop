import React from 'react';
import timeConverter from '../../timeConver/timeConver';
import Films from '../../actorInfo/films/Films';
import People from '../../actorInfo/people/People';
import { Link } from 'react-router-dom';
import './Homeworld.css';

export default function Homeworld(props) {
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

    const homeworldRender = (
        <div className="homeworld-page-container">
            <div className="info-container">
                <div className="homeworld-name">
                    <strong><h1>{info.name}</h1></strong>
                </div>

                <div className="ui divider"></div>

                <div className="time-info">
                    <strong><h4><i>Created Time: {newCreateDateTime}</i></h4></strong>
                    <strong><h4><i>Edited Time: {newEditedDateTime}</i></h4></strong>
                </div>

                <div className="ui divider"></div>

                <div className="basic-info">
                    <strong><h3>Model: {info.model}</h3></strong>
                    <strong><h3>Rotation Period: {info.rotation_period}</h3></strong>
                    <strong><h3>Orbital Period: {info.orbital_period}</h3></strong>
                    <strong><h3>Diameter: {info.diameter}</h3></strong>
                    <strong><h3>Climate: {info.climate}</h3></strong>
                    <strong><h3>Gravity: {info.gravity}</h3></strong>
                    <strong><h3>Terrain: {info.terrain}</h3></strong>
                    <strong><h3>Surface Water: {info.surface_water}</h3></strong>
                    <strong><h3>Population: {info.population}</h3></strong>
                </div>


                <div className="ui divider"></div>

                <div className="ui container">
                    <h1>Films: </h1>
                    <div className="ui four stackable cards">
                        {info.films && info.films.length ? info.films.map((film, idx) => 
                            <Films
                                key={film}
                                film={film}
                                name={name}
                                fetchMoreUrl={props.fetchMoreUrl}
                                idx={idx}
                            />
                        ): "" }
                    </div>

                    <div className="ui divider"></div>

                    <h1>Residents</h1>
                    <div className="ui four stackable cards">
                        {info.residents && info.residents.length ? info.residents.map((resident, idx) => 
                            <People
                                key={resident}
                                person={resident}
                                name={name}
                                fetchMoreUrl={props.fetchMoreUrl}
                                idx={idx}
                            />
                        ): "" }
                    </div>

                </div>

                <div className="btn-format">
                    <div className="extra content">
                        <Link 
                            to="/"
                            className="ui huge violet button"
                        >Home</Link>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div className="homeworld-page">
            { isLoading ? loading : homeworldRender }
        </div>
    )
}


