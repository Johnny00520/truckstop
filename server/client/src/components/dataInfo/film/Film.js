import React from 'react';
import { Link } from 'react-router-dom';
import timeConverter from '../../timeConver/timeConver';
import Species from '../../actorInfo/species/Species'
// import Character from '../character/Character';
// import Planet from '../planet/Planet';
import Planets from '../../actorInfo/planets/Planets';
import People from '../../actorInfo/people/People';
import Vehicles from '../../actorInfo/vehicles/Vehicles';
import Starships from '../../actorInfo/starships/Starships';
import './Film.css';

export default function Film(props) {
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

    const filmRender = (
        <div className="ui inverted vertical masthead center aligned segment">
            <div className="filmInfo-container">
                <h1>{info.title}</h1>
                <h3>{info.director}</h3>

                <div className="data-container">
                    <span><h5>Created Time: {newCreateDateTime}</h5></span>
                    <span><h5>Edited Time: {newEditedDateTime}</h5></span>
                    <span><h5>Release Date: {info.release_date}</h5></span>
                </div>
            </div>

            <div className="row">
                <div className="by">
                    <strong><p>{info.opening_crawl}</p></strong>
                </div>
            </div>
            <div className="producer">
                <span><h5>Producer: {info.producer}</h5></span>
                <span><h5>Episodes ID: {info.episode_id}</h5></span>
            </div>

            <div className="ui divider"></div>

            <div className="extra content">
                <div className="ui inverted segment">
                    <div className="ui one buttons ">
                        <Link 
                            to="/"
                            className="ui inverted primary button "
                        >Home</Link>
                        
                    </div>
                </div>
            </div>

            <div className="ui divider"></div>

            <div className="ui container">
                <h1>Species </h1>
                <div className="ui four stackable cards">
                    {info.species && info.species.length > 0 ? 
                        info.species.map((speciy, idx) => 
                        // <Speciy
                        <Species
                            key={speciy}
                            speciy={speciy} 
                            fetchChar={props.fetchChar}
                            fetchMoreUrl={props.fetchMoreUrl}
                            idx={idx}
                            name={name}
                        /> ) : ""}
                </div>

            <div className="ui divider"></div>

                <h1>Character: </h1>
                <div className="ui four stackable cards">
                    {info.characters && info.characters.length > 0 ? 
                        info.characters.map((character, idx) => 
                        // <Character
                        <People
                            key={character}
                            person={character} 
                            fetchChar={props.fetchChar}
                            fetchMoreUrl={props.fetchMoreUrl}
                            idx={idx}
                            name={name}
                        /> ) : ""}
                </div>

            <div className="ui divider"></div>

                <h1>Planet </h1>
                <div className="ui four stackable cards">
                    {info.planets && info.planets.length > 0 ? 
                        info.planets.map((planet, idx) => 
                        <Planets
                            key={planet}
                            planet={planet} 
                            // fetchChar={props.fetchChar}
                            fetchMoreUrl={props.fetchMoreUrl}
                            idx={idx}
                            name={name}
                        /> ) : ""}
                </div>

            <div className="ui divider"></div>

                <h1>Starship </h1>
                <div className="ui four stackable cards">
                    {info.starships && info.starships.length > 0 ? 
                        info.starships.map((starship, idx) => 
                        // <Starship 
                        <Starships 
                            key={starship}
                            starship={starship} 
                            fetchChar={props.fetchChar}
                            fetchMoreUrl={props.fetchMoreUrl}
                            idx={idx}
                            name={name}
                        /> ) : ""}
                </div>

            <div className="ui divider"></div>

                <h1>Vehicle</h1>
                <div className="ui four stackable cards">
                    {info.vehicles && info.vehicles.length > 0 ? 
                        info.vehicles.map((vehicle, idx) => 
                        // <Vehicle
                        <Vehicles
                            key={vehicle}
                            vehicle={vehicle} 
                            fetchChar={props.fetchChar}
                            fetchMoreUrl={props.fetchMoreUrl}
                            idx={idx}
                            name={name}
                        /> ) : ""}
                </div>
            </div>
        </div>
    )

    return (
        <div className="film-page">
            { isLoading ? loading : filmRender }
        </div>
        
    )
}
