import { Box, Card, CardContent } from '@mui/material'
import React, { useEffect } from 'react'
import { useAppDispatch } from '../../../../../app/hooks'
import { apiPokeByName } from '../../../actions/home.action'
import { IResults } from '../../../interfaces'
import { getApiPokemonByUrl } from '../../../services'

interface IPokemonsCardProps {
  pokemon: IResults
  id: number
}

export const PokemonsCard = ({ pokemon, id }: IPokemonsCardProps) => {
  const { url, name } = pokemon
  const dispatch = useAppDispatch()
  const [pokemonImage, setPokemonImage] = React.useState<string>('')
  useEffect(() => {
    const getPokemonById = async (url: string) => {
      const data = await getApiPokemonByUrl(url)
      setPokemonImage(data.sprites.front_default)
    }
    getPokemonById(url)
  }, [])

  return (
    <Card
      sx={{ boxShadow: 2 }}
      onClick={() => {
        dispatch(apiPokeByName(name))
      }}
    >
      <CardContent>
        <Box display='flex' alignItems='center'>
          <b>{id}</b>
          <img src={pokemonImage} alt={name} />
          <h3>{name}</h3>
        </Box>
      </CardContent>
    </Card>
  )
}
