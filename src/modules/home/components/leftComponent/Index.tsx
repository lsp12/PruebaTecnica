import { Button, Grid, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { PokemonsCard } from './pokemonCard/PokemonsCard'
import { apiPokeByName, apiPokeByUrl } from '../../actions/home.action'

export const LeftComponents = () => {
  const { pokemons } = useAppSelector((state) => state.home)
  const dispatch = useAppDispatch()
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <TextField
          label='Search'
          InputProps={{
            endAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          onKeyDown={(e: any) => {
            if (e.key === 'Enter') {
              console.log(e.target.value)
              dispatch(apiPokeByName(e.target.value))
            }
          }}
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <div style={{ overflow: 'hidden', height: 'calc(100vh - 200px)', overflowY: 'auto' }}>
          {pokemons ? (
            pokemons.results.map((pokemon, index) => (
              <PokemonsCard key={pokemon.name} pokemon={pokemon} id={index + 1} />
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </Grid>
      <Grid item xs={12} md={12}>
        <Button
          fullWidth
          variant='contained'
          onClick={() => {
            dispatch(apiPokeByUrl(pokemons?.next || ''))
          }}
        >
          Load more
        </Button>
      </Grid>
    </Grid>
  )
}
