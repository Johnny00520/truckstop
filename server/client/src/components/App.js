import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchChar, fetchMoreUrl } from '../actions/movies';
import { connect } from 'react-redux';

import history from './history/history';
import Home from './home/Home';
import ActorInfoPage from './actorInfo/ActorInfoPage';
import { 
  Router, 
  Route,
  Switch
} from 'react-router-dom';
import './App.css';

class App extends Component {
    
    render() {
        return (
            <div className="App">
                <Router history={history}>
                    <Switch>
                        <Route 
                            exact 
                            path="/" 
                            render={(props) => 
                              <Home 
                                // {...props} 
                                characters={this.props.characters}
                                fetchChar={this.props.fetchChar}
                              />}
                        />

                        <Route 
                            path="/actor/:name"
                            render={(props) =>
                                <ActorInfoPage
                                  {...props}
                                  characters={this.props.characters}
                                  fetchMoreUrl={this.props.fetchMoreUrl}
                                />
                            }
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}



App.propTypes = {
    App: PropTypes.object,
    fetchChar: PropTypes.func,
    characters: PropTypes.object
}

const mapStateToProps = (state) => {
  // debugger
  // console.log("state: ", state.characters)
  return { 
      // characters: state.characters.items,
      // isLoading: state.characters.isLoading,
      // error: state.characters.error,
      // info: state.characters.info
      characters: state.characters
  }
}

export default connect(mapStateToProps, {
  fetchChar,
  fetchMoreUrl
})(App);
