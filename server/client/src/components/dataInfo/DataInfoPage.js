import React from 'react';
import { Link } from 'react-router-dom';
import Specity from './speciy/Speciy';
import timeConverter from '../timeConver/timeConver';

import './DataInfoPage.css';

export default function DataInfo(props) {

    const { info, isLoading } = props.characters;

    let createdUTCstring = new Date(info.created).toUTCString();
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

    const dataInfoRender = (
        <div className="ui inverted vertical masthead center aligned segment">
                <div className="DataInfo-container">
                    <h1>{info.title}</h1>
                    <h3>{info.director}</h3>

                    <div className="data-container">
                        <span><h5>Created Time: {newCreateDateTime}</h5></span>
                        <span><h5>Edited Time: {newEditedDateTime}</h5></span>
                        <span><h5>Release Date: {info.release_date}</h5></span>
                    </div>
                </div>

                <div className="opening_crawl">
                    {info.opening_crawl}
                </div>
                <div className="producer">
                    <span><h5>Producer: {info.producer}</h5></span>
                    <span><h5>Episodes ID: {info.episode_id}</h5></span>
                </div>

                <div className="ui divider"></div>

                <div className="extra content">
                    <div className="ui one buttons ">
                        <Link 
                            to="/"
                            className="ui basic button green"
                        >Home</Link>
                        <Link 
                            to={`/actor/${props.match.params.name}`}
                            className="ui basic button green"
                        >Go back</Link>
                    </div>
                </div>
            <div className="ui container">
                <div className="ui four stackable cards">
                    
                    { info.species && info.species.length ? info.species.map((speciy, idx) => 
                        <Specity 
                            key={speciy} 
                            speciy={speciy} 
                            idx={idx}
                            name={props.match.params.name}
                            fetchMoreUrl={props.fetchMoreUrl}
                            fetchChar={props.fetchChar}
                    />) : "" }
                </div>
            </div>
        </div>
    )

    return (
        <div className="DataInfo-page">
            { isLoading ? loading : dataInfoRender }
        </div>
    )
}
