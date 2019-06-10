import React from 'react';
import { Link } from 'react-router-dom';

const Films = ({ film, fetchMoreUrl }) => {
    // debugger
    return (


        <div className="ui card">
            <div className="extra content">
                <div className="ui one buttons ">
                    <Link 
                        // to={`/actor/${char.name}`} 
                        to="/"
                        className="ui basic button green"
                        onClick={() => fetchMoreUrl(film)}
                    >Information</Link>
                </div>
            </div>

        </div>
    )
}

export default Films;