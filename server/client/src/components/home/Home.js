import React, { Component } from 'react';
import UserSelection from '../userSelection/UserSelection';
import PropTypes from 'prop-types';
import { fetchChars } from '../../actions/movies';
import { connect } from 'react-redux';
import './Home.css';

class Home extends Component {    

    componentDidMount() {
        this.props.fetchChars();
    }

    loading = (
        <div className="loading-show">
            <div className="ui active inverted dimmer">
                <div className="ui text loader">Preparing Files...</div>
            </div>
        </div>
    )

    render() {
        const { items, isLoading, error, info } = this.props.characters;

        if(error) {
            return (
                <div className="error_msg_wrapper">
                  <div className="ui negative message">
                      Error: {error.message}
                  </div>
                </div>
            )
        }

        return (
            <div className="home-page">
                <div className="box-info">

                    <span><h1>Truckshop</h1></span>
                    <div className="row">
                        <div className="row-title">
                            <strong><i>Code Challenge</i></strong>
                        </div>
                    </div>
                    { isLoading ? this.loading : 
                        <UserSelection 
                            characters={items}
                            info={info}
                            fetchChar={this.props.fetchChar}
                            array={this.props.array}
                        /> }
                </div>
            </div>
        )
    }
}

Home.propTypes = {
    Home: PropTypes.object,
    fetchChars: PropTypes.func
}


export default connect(null, {
    fetchChars
})(Home);