import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchChar, fetchMoreUrl } from '../actions/movies';
import { connect } from 'react-redux';

import history from './history/history';
import Home from './home/Home';
import ActorInfoPage from './actorInfo/ActorInfoPage';
import DataInfoPage from './dataInfo/DataInfoPage';

// Single one
import Film from './dataInfo/film/Film';
import Speciy from './dataInfo/speciy/Speciy';
import Vehicle from './dataInfo/vehicle/Vehicle';
import Starship from './dataInfo/starship/Starship';
import Homeworld from './dataInfo/homeworld/Homeworld';
import Planet from './dataInfo/planet/Planet';

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
                            render={() => 
                                <Home 
                                    characters={this.props.characters}
                                    fetchChar={this.props.fetchChar}
                                />
                            }
                        />

                        <Route 
                            path="/actor/:name"
                            exact 
                            render={(props) =>
                                <ActorInfoPage
                                    {...props}
                                    characters={this.props.characters}
                                    fetchMoreUrl={this.props.fetchMoreUrl}
                                />
                            }
                        />

                        {/* Film */}
                        <Route
                            path="/film/:name"
                            exact 
                            render={(props) => 
                                <Film
                                    {...props}
                                    characters={this.props.characters}
                                    fetchMoreUrl={this.props.fetchMoreUrl}
                                    info={this.props.info}
                                />
                            }
                        />

                        <Route
                            path="/speciy/:name"
                            render={(props) => 
                                <Speciy
                                    {...props}
                                    characters={this.props.characters}
                                    fetchMoreUrl={this.props.fetchMoreUrl}
                                    info={this.props.info}
                                />
                            }
                        />

                        <Route
                            path="/vehicle/:name"
                            render={(props) => 
                                <Vehicle 
                                    {...props}
                                    characters={this.props.characters}
                                    fetchMoreUrl={this.props.fetchMoreUrl}
                                    info={this.props.info}
                                />
                            }
                        />

                        <Route 
                            path="/starship/:name"
                            render={(props) =>
                                <Starship
                                    {...props}
                                    characters={this.props.characters}
                                    fetchChar={this.props.fetchChar}
                                    fetchMoreUrl={this.props.fetchMoreUrl}
                                    url={this.props.url}
                                />
                            }
                        />

                        <Route 
                            path="/homeworld/:name"
                            render={(props) =>
                                <Homeworld
                                    {...props}
                                    characters={this.props.characters}
                                    fetchChar={this.props.fetchChar}
                                    fetchMoreUrl={this.props.fetchMoreUrl}
                                    url={this.props.url}
                                />
                            }
                        />

                        <Route
                            path="/planet/:name"
                            render={(props) => 
                                <Planet
                                    {...props}
                                    characters={this.props.characters}
                                    fetchChar={this.props.fetchChar}
                                    fetchMoreUrl={this.props.fetchMoreUrl}
                                    url={this.props.url}
                                />
                            }
                        />
                        
                        <Route
                            path="/data/:name"
                            render={(props) => 
                                <DataInfoPage 
                                    {...props}
                                    characters={this.props.characters}
                                    fetchChar={this.props.fetchChar}
                                    fetchMoreUrl={this.props.fetchMoreUrl}
                                    url={this.props.url}
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
  return { 
      info: state.characters.info,
      characters: state.characters,
      url: state.characters.url
  }
}

export default connect(mapStateToProps, {
  fetchChar,
  fetchMoreUrl
})(App);
