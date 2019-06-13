import React from 'react';
import PropTypes from 'prop-types';
import ActorInfo from './ActorInfo';
import { Link } from 'react-router-dom';
import './ActorInfoPage.css';

const ActorInfoPage = (props) => {
    const { isLoading, error, info, items } = props.characters;

    const loading = (
        <div className="loading-show">
            <div className="ui active inverted dimmer">
                <div className="ui text loader">Preparing Files...</div>
            </div>
        </div>
    )

    if(error) {
        return (
            <div className="error_msg_block">
                <div className="error_msg_wrapper">
                    <div className="ui negative message">
                        <div className="header">
                            We're sorry. The data is: {error.message} 
                        </div>
                        <p>Please double check your url address and try again</p>
                    </div>

                    <div className="ui one buttons ">
                        <Link 
                            to="/" 
                            className="ui huge inverted teal button"
                        >Home</Link>
                    </div>
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


