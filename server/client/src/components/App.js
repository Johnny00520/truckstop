import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchChars, fetchChar } from '../actions/movies';
import { connect } from 'react-redux';

import UserSelection from './userSelection/UserSelection';
import './App.css';

class App extends Component {
    componentDidMount() {
      this.props.fetchChars()
    }

    render() {
        return (
            <div className="App">
                <UserSelection
                    characters={this.props.characters}
                    fetchChar={this.props.fetchChar}
                />
            </div>
        )
    }
}

App.propTypes = {
    App: PropTypes.object,
    fetchChars: PropTypes.func,
    fetchChar: PropTypes.func
}

const mapStateToProps = (state) => {
    // debugger
    return {
        characters: state.characters[0]
    }
}

export default connect(mapStateToProps, {
  fetchChars,
  fetchChar
})(App);
