import axios from 'axios'
import { httpPokemon } from '../../shared/axios'
import { IPokemonInfo, IPokemons } from '../interfaces'

export const getApiPokemon = async (): Promise<IPokemons> => {
  const response = await httpPokemon.get('')
  return response.data
}

export const getApiPokemonByUrl = async (url: string): Promise<IPokemonInfo> => {
  const response = await axios.get(url)
  return response.data
}

export const getApiNextPokemon = async (url: string): Promise<IPokemons> => {
  const response = await axios.get(url)
  return response.data
}

export const getApiPokemonByName = async (name: string): Promise<IPokemonInfo> => {
  const response = await httpPokemon.get(name)
  return response.data
}
