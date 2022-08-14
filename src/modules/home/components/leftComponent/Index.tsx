import { Button, Card, Grid, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { PokemonsCard } from './pokemonCard/PokemonsCard'
import { apiPokeByName, apiPokeByUrl } from '../../actions/home.action'

export const LeftComponents = () => {
  const { pokemons } = useAppSelector((state) => state.home)
  const [search, setSearch] = React.useState('')
  const dispatch = useAppDispatch()
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <TextField
          label='Search'
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position='start'>
                <SearchIcon
                  onClick={() => {
                    dispatch(apiPokeByName(search))
                  }}
                  sx={{ cursor: 'pointer' }}
                />
              </InputAdornment>
            ),
          }}
          onChange={(e) => {
            setSearch(e.target.value)
          }}
          value={search}
          onKeyDown={(e: any) => {
            if (e.key === 'Enter') {
              dispatch(apiPokeByName(e.target.value))
            }
          }}
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <Card>
          <Grid container>
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
        </Card>
      </Grid>
    </Grid>
  )
}
