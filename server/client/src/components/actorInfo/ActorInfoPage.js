import React from 'react';
import PropTypes from 'prop-types';
import ActorInfo from './ActorInfo';
import { Link } from 'react-router-dom';
import './ActorInfoPage.css';

const ActorInfoPage = (props) => {
    const { isLoading, error, info, items } = props.characters;

    // console.log("info: ", info)
    const loading = (
        <div className="loading-show">
            <div className="ui active inverted dimmer">
                <div className="ui text loader">Preparing Files...</div>
            </div>
        </div>
    )

    if(error) {
        return (
            <div className="error_msg_wrapper">
                <div className="ui negative message">
                    Error: {error.message}
                </div>
                <div className="ui one buttons ">
                    <Link 
                        // to={`/${props.pathname}`} 
                        to="/" 
                        className="ui basic button green"
                    >Go back</Link>
                </div>
            </div>
        )
    }
    return (
        <div className="action_info-container">
            <div className="ui container">
                { isLoading ? loading : 
                    <ActorInfo 
                        info={info} 
                        items={items} 
                        {...props} 
                        params={props.match.params}
                        fetchMoreUrl={props.fetchMoreUrl}
                /> }
            </div>
        </div>
    )
}

ActorInfoPage.propType = {
    ActorInfoPage: PropTypes.object
}

export default ActorInfoPage;


