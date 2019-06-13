import React from 'react';
import timeConverter from '../../timeConver/timeConver';
import Films from '../../actorInfo/films/Films';
import People from '../../actorInfo/people/People';
import { Link } from 'react-router-dom';
import './Vehicle.css';

export default function Vehicle(props) {
    const { info } = props.characters;
    const { name } = props.match.params;

    let createdUTCstring = new Date(info ? info.created : "").toUTCString();
    let createdDateTime = new Date(createdUTCstring).toDateString().split(" ");
    let newCreateDateTime = timeConverter(createdDateTime).join(" ");

    let editedUTCstring = new Date(info.edited).toUTCString();
    let editedDateTime = new Date(editedUTCstring).toDateString().split(" ");
    let newEditedDateTime = timeConverter(editedDateTime).join(" ");


    return (
        <div className="vehical-page">
            <div className="vehical-page-container">
                <div className="info-container">

                    <div className="vehicle-name">
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
                        <strong><h3>Manufacturer: {info.manufacturer}</h3></strong>
                        <strong><h3>Cost in Credits: {info.cost_in_credits}</h3></strong>
                        <strong><h3>Length: {info.length}</h3></strong>
                        <strong><h3>Crew: {info.crew}</h3></strong>
                        <strong><h3>Passengers: {info.passengers}</h3></strong>
                        <strong><h3>Cargo Capacity: {info.cargo_capacity}</h3></strong>
                        <strong><h3>Consumables: {info.consumables}</h3></strong>
                        <strong><h3>Max Atmosphering Speed: {info.max_atmosphering_speed}</h3></strong>
                        <strong><h3>Vehicle class: {info.vehicle_class}</h3></strong>
                    </div>

                    <div className="ui divider"></div>

                    <div className="ui container">
                        <h1>Films </h1>
                        <div className="ui three column stackable cards">
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

                        <h1>Pilots</h1>
                        <div className="ui three column stackable cards">
                            {info.pilots && info.pilots.length ? info.pilots.map((pilot, idx) => 
                                <People 
                                    key={pilot}
                                    person={pilot}
                                    name={name}
                                    fetchMoreUrl={props.fetchMoreUrl}
                                    idx={idx}
                                />
                            ): "" }
                        </div>

                    </div>

                    <div className="btn-format">
                        <div className="extra content">
                            <div className="ui one buttons ">
                                <Link 
                                    to="/"
                                    className="ui huge inverted grey button"
                                >Home</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
    )
}

