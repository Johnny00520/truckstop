// Read JSON file synchronously, but can be only updated outside
const { characters } = require('../FakeData/characters.json');
const fetch = require('node-fetch');


// If there's CRUD for each data (films, species, vehicles, starships),
// I would separate them into different route file, but since the requestment
// only relates to get method, so I put them into one file

// const validation = (data) => {
//     let errors = {};

//     if(data.name === "") errors.name = "Name cannot be empty";

//     const isValid = Object.keys(errors).length === 0;
//     return { errors, isValid };
// }

function handleResponse(response) {
    // console.log("response: ", response)
    if(response.ok) {
        return response.json();
    } else {
        let error = new Error(response.statusText);
        // debugger
        error.response = response;
        throw error;
    }
}

module.exports = (app) => {
    // app.use((req, res, next) => {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //     next();
    // });

    app.get('/api/data/:url', (req, res) => {
        const { url } = req.params;
        
        fetch(url)
        .then(handleResponse)
        .then(data => res.json(data))
        .catch(error => {
            if(error.response.status === 404) {
                console.error("404: Not found")
                return res.status(404).json( error )
            }
            res.statusMessage = "Something went wrong, please contact customer service.";
            return res.status(500).end();
        });
    });
    
    app.get('/api/characters/:name', (req, res) => {
        const { name } = req.params;

        let i = 0;
        let url;
        for(i; i < characters.length; i++) {
            if(name === characters[i].name) {
                url = characters[i].url
            }
        }

        fetch(url)
        .then(handleResponse)
        .then(data => res.json( data ))
        .catch(error => {
            console.log("error in backend: ", error)
            if(error.response.status === 404) {
                console.error("404: Not found")
                return res.status(404).json( error )
            }
            res.statusMessage = "Something went wrong, please contact customer service.";
            return res.status(500).end();
        });
    });

    app.get('/api/characters', (req, res) => {
        if(!characters) {
            console.error("Error on fetching JSON file")
            res.statusMessage = "Something went wrong, please contact customer service.";
            return res.status(500).end();
        } else {
            return res.status(200).json(characters)
        }

        // const fileContents = fs.readFileSync(__dirname+'/characters.json')
        // try {
        //     res.json( JSON.parse( fileContents ))
        // } catch(err) {
        //     console.error(err)
        // } 
    });
}