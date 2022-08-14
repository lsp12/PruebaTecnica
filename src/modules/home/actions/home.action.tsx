import { createAsyncThunk } from '@reduxjs/toolkit'
import { getApiNextPokemon, getApiPokemon, getApiPokemonByName } from '../services'

export const apiPoke = createAsyncThunk('getApi/apiPoke', async () => {
  try {
    const data = await getApiPokemon()
    return data
  } catch (error) {
    console.log(error)
  }
})

export const apiPokeByUrl = createAsyncThunk(
  'getApi/apiPokeByUrl',
  async (url: string, { rejectWithValue }) => {
    try {
      const data = await getApiNextPokemon(url)
      return data
    } catch (error) {
      console.log(error)
      rejectWithValue(error)
    }
  },
)

export const apiPokeByName = createAsyncThunk(
  'getApi/apiPokeByName',
  async (name: string, { rejectWithValue }) => {
    try {
      const data = await getApiPokemonByName(name)
      return data
    } catch (error: any) {
      console.log(error)
      return rejectWithValue(error.message)
    }
  },
)
