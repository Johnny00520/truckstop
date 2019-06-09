// Read JSON file synchronously, but can be only updated outside
const { characters } = require('../FakeData/characters.json');

const fetch = require('node-fetch');


module.exports = (app) => {
    // app.use((req, res, next) => {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //     next();
    // });

    
    app.get('/api/characters/:name', (req, res) => {

        const { name } = req.params;
        console.log(name)
        // res.json({ express: 'Hello From Express' })

        let i = 0;
        let url;
        for(i; i < characters.length; i++) {
            if(name === characters[i].name) {
                url = characters[i].url
                // res.json(characters[i])
            }
        }

        fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            res.json({ data });
        })
        .catch(err => {
            res.redirect('/error');
        });

    });

    app.get('/api/characters', (req, res) => {
        if(!characters) {
        } else {
            res.json(characters )
        }

        // const fileContents = fs.readFileSync(__dirname+'/characters.json')
        // try {
        //     res.json( JSON.parse( fileContents ))
        // } catch(err) {
        //     console.error(err)
        // } 
    });
}