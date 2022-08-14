import axios from 'axios'

export const httpPokemon = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/',
  headers: {
    'Content-Type': 'application/json',
  },
})
