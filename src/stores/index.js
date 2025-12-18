import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    //sao os dados
    state: {
        characters: [],
        character: [],
    },
    mutations: {

        loadAllCharacters(state, characters) {
            //a mutation altera o state
            state.characters = characters;
        },

        loadAllGryffindor(state, characters) {
            //a mutation altera o state
            state.characters = characters;
        },

        loadAllSlytherin(state, characters) {
            //a mutation altera o state
            state.characters = characters;
        },

        loadAllRavenclaw(state, characters) {
            //a mutation altera o state
            state.characters = characters;
        },

        loadAllHuffepuff(state, characters) {
            //a mutation altera o state
            state.characters = characters;
        },

        loadCharacter(state, character) {
            //a mutation altera o state
            state.character = character;
        },


    },
    actions: {


        loadCharacter({ commit }, character) {

            axios.get(`https://hp-api.onrender.com/api/character/${character}`)
                .then(function (response) {


                    function FormataStringData(data) {
                        var dia = data.split("-")[0];
                        var mes = data.split("-")[1];
                        var ano = data.split("-")[2];

                        //return ano + '-' + ("0" + mes).slice(-2) + '-' + ("0" + dia).slice(-2);
                        return ("0" + dia).slice(-2) + '/' + ("0" + mes).slice(-2) + '/' + ano;
                        // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
                    }

                    response.data.forEach(function (item) {

                        if (item.dateOfBirth !== null) {
                            item.dateOfBirth = FormataStringData(item.dateOfBirth)
                        }

                        if (item.house == 'Gryffindor') { item.house = 'Grifinória' }
                        if (item.house == 'Slytherin') { item.house = 'Sonserina' }
                        if (item.house == 'Ravenclaw') { item.house = 'Corvinal' }
                        if (item.house == 'Huffepuff') { item.house = 'Lufa-Lufa' }

                        if (item.ancestry == 'muggleborn') { item.ancestry = 'Nascido Trouxa' }
                        if (item.ancestry == 'half-blood') { item.ancestry = 'Meio Sangue' }
                        if (item.ancestry == 'pure-blood') { item.ancestry = 'Puro Sangue' }

                        if (item.species == 'human') { item.species = 'Humano' }

                    });

                    // a action invoca o mutation
                    commit('loadCharacter', response.data) //seria o mutation

                })
                .catch(function (error) {
                    console.log(error);
                })

        },


        loadAllCharacters({ commit }) {

            axios.get('https://hp-api.onrender.com/api/characters')
                .then(function (response) {

                    response.data.forEach(function (item) {

                        if (item.house == 'Gryffindor') { item.house = 'Grifinória' }
                        else if (item.house == 'Slytherin') { item.house = 'Sonserina' }
                        else if (item.house == 'Ravenclaw') { item.house = 'Corvinal' }
                        else if (item.house == 'Huffepuff') { item.house = 'Lufa-Lufa' }

                    });


                    // a action invoca o mutation
                    commit('loadAllCharacters', response.data) //seria o mutation

                })
                .catch(function (error) {
                    console.log(error);
                })

        },

        loadAllGryffindor({ commit }) {

            axios.get('https://hp-api.onrender.com/api/characters/house/gryffindor')
                .then(function (response) {

                    response.data.forEach(function (item) {
                        if (item.house == 'Gryffindor') { item.house = 'Grifinória' }
                    });

                    // a action invoca o mutation
                    commit('loadAllGryffindor', response.data) //seria o mutation

                })
                .catch(function (error) {
                    console.log(error);
                })

        },

        loadAllSlytherin({ commit }) {

            axios.get('https://hp-api.onrender.com/api/characters/house/Slytherin')
                .then(function (response) {

                    response.data.forEach(function (item) {
                        if (item.house == 'Slytherin') { item.house = 'Sonserina' }
                    });

                    // a action invoca o mutation
                    commit('loadAllSlytherin', response.data) //seria o mutation

                })
                .catch(function (error) {
                    console.log(error);
                })

        },

        loadAllRavenclaw({ commit }) {

            axios.get('https://hp-api.onrender.com/api/characters/house/Ravenclaw')
                .then(function (response) {

                    response.data.forEach(function (item) {

                        if (item.house == 'Ravenclaw') { item.house = 'Corvinal' }

                    });

                    // a action invoca o mutation
                    commit('loadAllRavenclaw', response.data) //seria o mutation

                })
                .catch(function (error) {
                    console.log(error);
                })
        },

        loadAllHuffepuff({ commit }) {

            axios.get('https://hp-api.onrender.com/api/characters/house/Huffepuff')
                .then(function (response) {

                    response.data.forEach(function (item) {

                        if (item.house == 'Huffepuff') { item.house = 'Lufa-Lufa' }

                    });

                    // a action invoca o mutation
                    commit('loadAllHuffepuff', response.data) //seria o mutation

                })
                .catch(function (error) {
                    console.log(error);
                })
        },



    },
    modules: {
    }
})
