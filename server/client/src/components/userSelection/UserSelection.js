import React from 'react';
import MovieCards from './movieCard/MovieCards';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { fetchChar } from '../../actions/movies';

import './UserSelection.css';

const UserSelection = ({ characters, fetchChar }) => {

    const emptyList = (
        <span className="words">
            <p>There is no movie in your collection</p>
        </span>
    )

    const movieList = (characters, fetchChar) => {
        return (
        <div className="ui container">
            <div className="ui four stackable cards">
                { characters.map((character) =>
                    <MovieCards
                        key={character.url}
                        selectTarget={fetchChar} 
                        char={character}
                    />
                )}
            </div>
        </div>
        )
    }

    return (
        <div className="user-selection-page">
            <h1 className="title">Characters List</h1>
            { characters ? movieList(characters, fetchChar) : emptyList }
        </div>
    )
}

// class UserSelection extends Component {
    
//     // handleChange = (e) => {
//     //     e.preventDefault();
//     //     const { name, value } = e.target;
//     //     this.setState((prevState) => ({
//     //         value: { ...prevState.value, [name]: value }
//     //     }))
//     //     debugger
//     //     this.props.fetchChar(value)
//     // }

//     // handleSubmit = (e) => {
//     //     e.preventDefault();

//     //     let errors = {};
//     //     if(this.state.value === "") errors.value = "Cannot be empty";

//     // }

//     render() {
//         const characters = this.props.characters

//         return (
//             <div className="ui container">
//                 <h1>Character List</h1>
//                 <div className="ui four stackable cards">
//                     {/* { characters instanceof Object ? */}
//                     { characters ? this.props.characters.map(char => 
//                         <MovieCards
//                             key={char.url}
//                             selectTarget={this.props.fetchChar} 
//                             char={char}
//                         />
//                     ): 
//                     <p>You don't have collection in the database</p> }
                    
//                 </div>
//             </div>
//         )
//     }
// }

// UserSelection.propTypes = {
//     fetchChars: PropTypes.func
// }

// const mapStateToProps = (state) => {
//     debugger
//     return {
//         characters: state.characters
//     }
// }
// export default connect(mapStateToProps, { 
//     // fetchChars,
//     fetchChar
// })(UserSelection);

export default UserSelection;


