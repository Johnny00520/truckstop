import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchChar } from '../../actions/movies';
import { Link } from 'react-router-dom';
import profile_img from '../../asset/coming-soon.jpg';

import timeConverter from '../timeConver/timeConver';
import Films from './films/Films';
import Species from './species/Species';
import Starships from './starships/Starships';
import Vehicles from './vehicles/Vehicles';
import Homeworld from './homeworld/Homeworld';
import './ActorInfoPage.css';

const directionArray = ['left', 'right'];
const colorArray = ['red', 'blue', 'orange', 'teal'];

class ActorInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pic: null,
            name: this.props.info ? this.props.info.name : "Unknown",
            birth_year: this.props.info ? this.props.info.birth_year : "Unknown",
            eye_color: this.props.info ? this.props.info.eye_color : "Unknown",
            gender: this.props.info ? this.props.info.gender : "Unknown",
            hair_color: this.props.info ? this.props.info.hair_color : "Unknown",
            height: this.props.info ? this.props.info.height : "Unknown",
            mass: this.props.info ? this.props.info.mass : "Unknown",
            skin_color: this.props.info ? this.props.info.skin_color : "Unknown",
            url: this.props.info ? this.props.info.url : "Unknown",

            created: this.props.info ? this.props.info.created : "",
            edited: this.props.info ? this.props.info.edited : "",
            colorIndex: 0,
            directionIndex: 0
        }
    }
    
    componentDidMount() {
        this.setState((prevState) => ({
            colorIndex: prevState.colorIndex + Math.floor(Math.random() * 4),
            directionIndex: prevState.directionIndex + Math.floor(Math.random() * 2)
        }))

        if(this.props.params.name) {
            this.props.fetchChar(this.props.params.name)
        }
    }

    componentWillReceiveProps(nextProps) {

        let createdUTCstring = (new Date(nextProps.info.created)).toUTCString();
        let createdDateTime = new Date(createdUTCstring).toDateString().split(" ");
        let newCreateDateTime = timeConverter(createdDateTime).join(" ");

        let editedUTCstring = new Date(nextProps.info.edited).toUTCString();
        let editedDateTime = new Date(editedUTCstring).toDateString().split(" ");
        let newEditedDateTime = timeConverter(editedDateTime).join(" ");
        // debugger
        this.setState({
            name: nextProps.info.name,
            birth_year: nextProps.info.birth_year,
            eye_color: nextProps.info.eye_color,
            gender: nextProps.info.gender,
            hair_color: nextProps.info.hair_color,
            height: nextProps.info.height,
            mass: nextProps.info.mass,
            skin_color: nextProps.info.skin_color,
            url: nextProps.info.url,

            created: newCreateDateTime,
            edited: newEditedDateTime

        })
    }

    loading = (
        <div className="loading-show">
            <div className="ui active inverted dimmer">
                <div className="ui text loader">Preparing Files...</div>
            </div>
        </div>
    )

    render() {
        const { name, films, species, starships, vehicles, homeworld } = this.props.info;

        return (
            <div className="table-wrapper">
                <div className="info-container">
                    <div className="ui raised seqment">
                        <div className={`ui ${colorArray[this.state.colorIndex]} ${directionArray[this.state.directionIndex]} ribbon label`}>

                            <div className="info-header">
                                <h2>{this.state.name}</h2>
                            </div>
                        </div>
                        <span><h3 className="detail-title">Details</h3></span>   
                    </div>
                    
                    <div className="img-wrapper">
                        <img className="ui small rounded image" src={this.state.pic ? "" : profile_img} alt="Cover"/>
                    </div>
                    <div className="date-info">
                        <p>Created: {this.state.created}</p>
                        <p>Edited: {this.state.edited}</p>
                    </div>

                    <div className="ui divider"></div>

                    <div className="ui divided selection list">

                        <div className="block">
                            <div className="inner-block-left">

                                <span className="block-info">
                                    <div className="ui purple horizontal label">Birth Year</div>
                                    <span className="block-data">
                                        {this.state.birth_year}
                                    </span>
                                </span>
                                <span className="block-info">
                                    <div className="ui purple horizontal label">Eye Color</div>
                                    <span className="block-data">
                                        {this.state.eye_color}
                                    </span>
                                </span>
                                <span className="block-info">
                                    <div className="ui purple horizontal label">Hair Color</div>
                                    <span className="block-data">
                                        {this.state.hair_color}
                                    </span>
                                </span>
                                <span className="block-info">
                                    <div className="ui purple horizontal label">Skin Color</div>
                                    <span className="block-data">
                                        {this.state.skin_color}
                                    </span>
                                </span>
                                
                            </div>
                            <div className="inner-block-right">
                                <span className="block-info">
                                    <div className="ui red horizontal label">Birth Year</div>
                                    <span className="block-data">
                                    {this.state.birth_year}
                                    </span>
                                </span>
                                <span className="block-info">
                                    <div className="ui red horizontal label">Gender</div>
                                    <span className="block-data">
                                    {this.state.gender}
                                    </span>
                                </span>
                                <span className="block-info">
                                    <div className="ui red horizontal label">Height</div>
                                    <span className="block-data">
                                    {this.state.height}
                                    </span>
                                </span>
                                <span className="block-info">
                                    <div className="ui red horizontal label">Mass</div>
                                    <span className="block-data">
                                    {this.state.mass}
                                    </span>
                                </span>

                            </div>
                        </div>
                        </div>

                        <div className={films && films.length ?
                            "catagories" : "catagories-hidden" }>
                            <div className="ui divider"></div>
                            <div className="caragory-title">
                                <strong><i>Films:</i></strong>
                            </div>
                        </div>
                        <div className="films-block">
                            <div className="ui three column stackable cards">
                                { films && films.length ? films.map((film, idx) => 
                                    <Films key={film} film={film} 
                                        name={name}
                                        idx={idx}
                                        fetchMoreUrl={this.props.fetchMoreUrl}
                                    />) : "" }
                            </div>
                        </div>

                        <div className={species && species.length ? 
                            "catagories" : "catagories-hidden" }>
                            <div className="ui divider"></div>
                            <div className="caragory-title">
                                <strong><i>Species:</i></strong>
                            </div>
                        </div>
                        <div className="films-block">
                            <div className="ui three column stackable cards">
                                {species && species.length > 0 ? species.map((speciy, idx) => 
                                    <Species 
                                        key={speciy}
                                        speciy={speciy}
                                        name={name}
                                        idx={idx}
                                        fetchMoreUrl={this.props.fetchMoreUrl}
                                    /> ) : ""}
                            </div>
                        </div>

                        <div className={starships && starships.length ? 
                            "catagories" : "catagories-hidden"}>
                            <div className="ui divider"></div>
                            <div className="caragory-title">
                                <strong><i>Starships:</i></strong>
                            </div>
                        </div>
                        <div className="films-block">
                            <div className="ui three column stackable cards">
                                { starships && starships.length ? starships.map((starship, idx) => 
                                    <Starships 
                                        key={starship} 
                                        starship={starship}
                                        name={name}
                                        idx={idx}
                                        fetchMoreUrl={this.props.fetchMoreUrl}
                                    />) : "" }
                            </div>
                        </div>

                        <div className={vehicles && vehicles.length ? 
                            "catagories" : "catagories-hidden"}>
                            <div className="ui divider"></div>
                            <div className="caragory-title">
                                <strong><i>Vehicles:</i></strong>
                            </div>
                        </div>
                        <div className="films-block">
                            <div className="ui three column stackable cards">
                                { vehicles && vehicles.length ? vehicles.map((vehicle, idx) => 
                                    <Vehicles 
                                        key={vehicle} 
                                        vehicle={vehicle} 
                                        name={name}
                                        idx={idx}
                                        fetchMoreUrl={this.props.fetchMoreUrl}
                                    />) : "" }

                            </div>
                        </div>
                    
                        <div className="catagories">
                            <div className="ui divider"></div>
                            <div className="caragory-title">
                                <strong><i>Home World:</i></strong>
                            </div>
                        </div>
                        <div className="films-block">
                            <Homeworld 
                                homeworld={homeworld}
                                name={name}
                                fetchMoreUrl={this.props.fetchMoreUrl}
                            />
                        </div>
                </div>
                
                <div className="btn-formate">
                    <div className="extra content">
                        <div className="ui one buttons ">
                            <Link 
                                to="/"
                                // to={`${this.props.pathname}`}
                                className="ui huge inverted primary button"
                            >Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ActorInfo.propType = {
    ActorInfo: PropTypes.object,
    fetchChar: PropTypes.func
}

const mapStateToProps = (state, props) => {
    if(props.params) {
        return {
            character: state.characters.items.find(item => item.name === props.params.name),
            // pathname: props.location.pathname
        };
    }

    return { character: null }
}

export default connect(mapStateToProps, {
    fetchChar
})(ActorInfo);