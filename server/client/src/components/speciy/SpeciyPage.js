// import React from 'react';
// import timeConverter from '../timeConver/timeConver';

// export default function SpeciyPage(props) {

//     const { info } = props.characters;

//     let createdUTCstring = new Date(info.created).toUTCString();
//     let createdDateTime = new Date(createdUTCstring).toDateString().split(" ");
//     // let newCreateDateTime = convert(createdDateTime).join(" ");
//     let newCreateDateTime = timeConverter(createdDateTime).join(" ");

//     let editedUTCstring = new Date(info.edited).toUTCString();
//     let editedDateTime = new Date(editedUTCstring).toDateString().split(" ");
//     // let newEditedDateTime = convert(editedDateTime).join(" ");
//     let newEditedDateTime = timeConverter(editedDateTime).join(" ");


//     return (
//         <div className="Speciy_Page">
//             <div className="ui inverted vertical masthead center aligned segment">
//                 <div className="DataInfo-container">
//                     <h1>Speciy</h1>
//                     <h1>{info.title}</h1>
//                     <h3>{info.director}</h3>

//                     <div className="data-container">
//                         <span><h5>Created Time: {newCreateDateTime}</h5></span>
//                         <span><h5>Edited Time: {newEditedDateTime}</h5></span>
//                         <span><h5>Release Date: {info.release_date}</h5></span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


// // average_height: "66"
// // average_lifespan: "900"
// // classification: "mammal"
// // created: "2014-12-15T12:27:22.877000Z"
// // designation: "sentient"
// // edited: "2014-12-20T21:36:42.148000Z"
// // eye_colors: "brown, green, yellow"
// // films: (5) ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/5/", "https://swapi.co/api/films/4/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/"]
// // hair_colors: "brown, white"
// // homeworld: "https://swapi.co/api/planets/28/"
// // language: "Galactic basic"
// // name: "Yoda's species"
// // people: ["https://swapi.co/api/people/20/"]
// // skin_colors: "green, yellow"
// // url: "https://swapi.co/api/species/6/"