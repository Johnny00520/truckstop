import React from 'react';
// import comming_soon from '../../../asset/coming-soon.jpg';
import timeConverter from '../../timeConver/timeConver';
import { Link } from 'react-router-dom';
import Films from '../../actorInfo/films/Films';
import People from '../../actorInfo/people/People';
import Homeworld from '../../actorInfo/homeworld//Homeworld';
import './Speciy.css';

// export default function Speciy({ speciy, idx, name, fetchChar, fetchMoreUrl }) {
export default function Speciy(props) {
    // debugger
    const { info } = props.characters;
    const { name } = props.match.params;

    let createdUTCstring = new Date(info ? info.created : "").toUTCString();
    let createdDateTime = new Date(createdUTCstring).toDateString().split(" ");
    let newCreateDateTime = timeConverter(createdDateTime).join(" ");

    let editedUTCstring = new Date(info.edited).toUTCString();
    let editedDateTime = new Date(editedUTCstring).toDateString().split(" ");
    let newEditedDateTime = timeConverter(editedDateTime).join(" ");

    return (
        <div className="speciy-page">
            <div className="speciy-page-container">

                <div className="info-container">

                    <div className="speciy-name">
                        <strong><h1>{info.name}</h1></strong>
                    </div>

                    <div className="ui divider"></div>

                    <div className="time-info">
                        <strong><h4><i>Created Time: {newCreateDateTime}</i></h4></strong>
                        <strong><h4><i>Edited Time: {newEditedDateTime}</i></h4></strong>
                    </div>

                    <div className="ui divider"></div>

                    <div className="basic-info">
                        <strong><h3>Height: {info.average_height}</h3></strong>
                        <strong><h3>Life Span: {info.average_lifespan}</h3></strong>
                        <strong><h3>Hair colors: {info.hair_colors}</h3></strong>
                        <strong><h3>Eye colors: {info.eye_colors}</h3></strong>
                        <strong><h3>Language: {info.language}</h3></strong>
                        <strong><h3>Skin Colors: {info.skin_colors}</h3></strong>
                        <strong><h3>Classification: {info.classification}</h3></strong>
                        <strong><h3>Designation: {info.designation}</h3></strong>
                    </div>
                    
                    <div className="ui divider"></div>

                    <div className="btn-wrapper">
                        <div className="ui two buttons ">
                            <Link 
                                to="/"
                                className="ui inverted secondary button"
                                // onClick={() => props.fetchMoreUrl(speciy)}
                            >Home</Link>
                            <Link
                                to={`/actor/${name}`}
                                className="ui inverted secondary button"
                                // onClick={() => fetchChar(name)}
                            >Go back
                            </Link>
                        </div>
                    </div>

                    <div className="ui divider"></div>
                        <Homeworld homeworld={info.homeworld}/>

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

                        <h1>People</h1>
                        <div className="ui four stackable cards">
                            {info.people && info.people.length ? info.people.map((person, idx) => 
                                <People
                                    key={person}
                                    person={person}
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
                                    className="ui inverted huge yellow button"
                                >Home</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}




// homeworld: "https://swapi.co/api/planets/9/"
// url: "https://swapi.co/api/spec
