import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchChar } from '../../actions/movies';
import { Link } from 'react-router-dom';
import profile_img from '../../asset/coming-soon.jpg';


import Films from './films/Films';
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
            // films: this.props.info ? this.props.info.films : [],

            colorIndex: 0,
            directionIndex: 0
        }
    }

    convert = (DateTime) => {
        
        let longWeekDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        let srtWeekDay = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

        const index = srtWeekDay.findIndex(element => element === DateTime[0]);
        if(index > -1) {
            DateTime[0] = longWeekDay[index]
            return DateTime
        }
        return DateTime
    }
    
    componentDidMount() {
        this.setState((prevState) => ({
            colorIndex: prevState.colorIndex + Math.floor(Math.random() * 4),
            directionIndex: prevState.directionIndex + Math.floor(Math.random() * 2)
        }))

        if(this.props.params.name) {
            // debugger
            this.props.fetchChar(this.props.params.name)
        }
    }

    componentWillReceiveProps(nextProps) {
        // debugger
        // console.log(nextProps.info.created)

        let createdUTCstring = (new Date(nextProps.info.created)).toUTCString();
        let createdDateTime = new Date(createdUTCstring).toDateString().split(" ");

        let newCreateDateTime = this.convert(createdDateTime).join(" ");


        let editedUTCstring = new Date(nextProps.info.edited).toUTCString();
        let editedDateTime = new Date(editedUTCstring).toDateString().split(" ");
        let newEditedDateTime = this.convert(editedDateTime).join(" ");

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

    render() {
        const { films, species, starships, vehicles } = this.props.info
        // debugger
        // console.log("films: ", films)
        // console.log("species: ", species)
        // console.log("starships: ", starships)
        // console.log("vehicles: ", vehicles)

        return (

            <div className="table-wrapper">

                <div className="info-container">

                    <div className="ui raised seqment">
                        <div className={`ui ${colorArray[this.state.colorIndex]} ${directionArray[this.state.directionIndex]} ribbon label`}>

                            <div className="info-header">
                                <h2>{this.state.name}</h2>
                            </div>
                        </div> 
                            
                    </div>
                    <h3 className="detail-title">Detail</h3>
                    <div className="img-wrapper">
                        <img className="ui small rounded image" src={this.state.pic ? "" : profile_img} alt="Cover"/>
                    </div>
                    <p>Created: {this.state.created}</p>
                    <p>Edited: {this.state.edited}</p>

                    <div className="ui divider"></div>

                    <div className="ui divided selection list">

                        <div className="block_info">
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

                        <div className="ui divider"></div>

                        {/* <div className="ui container"> */}

                            <div className="films-block">
                                {/* <div className="ui left corner label">
                                <i className="heart icon"></i> */}
                                <div className="ui three column stackable cards">

                                    { films && films.length ? films.map((film) => 
                                        <Films key={film} film={film} fetchMoreUrl={this.props.fetchMoreUrl}
                                        />) : "" }
                                </div>
                                {/* </div> */}
                            </div>
                        {/* </div> */}




                        <div className="ui divider"></div>
                        {/* { species && species.length ? species.map((specie) => <Species key={specie} specie={specie} />) : "" }

                        <div className="ui divider"></div>
                        { starships && starships.length ? starships.map((starship) => <Starships key={starship} starship={starship} />) : "" }

                        <div className="ui divider"></div>
                        { vehicles && vehicles.length ? vehicles.map((vehicle) => <Vehicles key={vehicle} vehicle={vehicle} />) : "" } */}
                            
                        



                    





                </div>




                
                <div className="extra content">
                    <div className="ui one buttons ">
                        <Link 
                            to="/"
                            // to={`${this.props.pathname}`}
                            className="ui basic button green"
                        >Home</Link>
                    </div>
                </div>

            </div>
                

        )
    }
}

ActorInfo.propType = {
    ActorInfo: PropTypes.object
}

const mapStateToProps = (state, props) => {
    // debugger
    console.log(props)
    if(props.params) {
        // console.log(state.characters)
        // debugger
        return {
            character: state.characters.items.find(item => item.name === props.params.name),
            pathname: props.location.pathname
        };
    }

    return { character: null }
}

export default connect(mapStateToProps, {
    fetchChar
})(ActorInfo);