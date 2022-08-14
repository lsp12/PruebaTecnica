import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { Presentation } from './presentation/Presentation'
import { StatGrid } from './statGrid/StatGrid'
import pokemon from '../../../../assets/images/pokemon.png'

export const RightComponent = () => {
  const { loadingPokemonInfo, stats, sprites } = useAppSelector((state) => state.home)
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        {loadingPokemonInfo ? (
          <Box
            display={'flex'}
            height={'calc(100vh - 100px)'}
            justifyContent={'center'}
            alignItems='center'
          >
            <CircularProgress size={50} color='secondary' />
          </Box>
        ) : (
          <>
            {stats && stats.length > 0 && sprites ? (
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <Presentation />
                </Grid>
                <Grid item xs={12} md={12}>
                  <StatGrid />
                </Grid>
              </Grid>
            ) : (
              <Box textAlign='center'>
                <Typography variant='h5' mb={3} fontWeight='bold'>
                  Nothing was found
                </Typography>
                <img src={pokemon} alt='notFoundImage' height={'180rem'} />
                <Typography variant='h5' mt={3} fontWeight='bold'>
                  Click on a Pokemon Card o search with the search input.
                </Typography>
              </Box>
            )}
          </>
        )}
      </Grid>
    </Grid>
  )
}
