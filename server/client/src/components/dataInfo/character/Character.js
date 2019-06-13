// import React from 'react';
// import comming_soon from '../../../asset/coming-soon.jpg';
// import { Link } from 'react-router-dom';
// import './Character.css';

// export default function Character({ character, idx, name, fetchChar, fetchMoreUrl }) {
//     return (
//         <div className="ui card">
//             <div className="row">
//                 <div className="by">
//                     <strong><p>{idx + 1}</p></strong>
//                 </div>
//             </div>
//             <div className="card_container">
//                 {character.img ? "" : <img className="ui image" src={comming_soon} alt={character}/>}
//             </div>
//             <div className="extra content">
//                 <div className="ui one buttons ">
//                     <Link 
//                         to="/"
//                         className="ui basic button green"
//                     >Home</Link>
//                 </div>
//             </div>
//         </div>
//     )
// }
