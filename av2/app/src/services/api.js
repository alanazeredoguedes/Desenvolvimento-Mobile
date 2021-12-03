const axios = require('axios').default;

const url_pokemon = 'https://pokeapi.co/api/v2/pokemon/id'
const url_pokemon_image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/id.png'
const url_api = 'https://pkgame.alanguedes.com/'

var apiPokemon = {

    getPokemon: async (id) =>{
        try {
            return await axios.get( url_pokemon.replace('id', id) )
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    },

    getTop3: async () =>{
        try {
            return await axios.get( url_api + 'ranking/top3' )
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    },
    logar: async (user, pass) =>{
        try {
            console.log(user, pass)
            return await axios.post( url_api + 'usuarioLogar', { username: user, password: pass} )
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    },
    usuarioUpdate: async (user) =>{
        try {
            //console.log(user, pass)
            return await axios.post( url_api + 'usuarioUpdate', user )
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    },
    registrar: async () =>{
        try {
            return await axios.get( url_api + 'ranking/top3' )
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }

}

exports.apiPokemon = apiPokemon;
