import { CircularProgress, Grid } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../../../../app/hooks'

export const RightComponent = () => {
  const { loadingPokemonInfo } = useAppSelector((state) => state.home)
  console.log(loadingPokemonInfo)
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        {loadingPokemonInfo ? (
          <CircularProgress size={24} color='secondary' />
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <div>RightComponent</div>
            </Grid>
            <Grid item xs={12} md={12}>
              <div>RightComponent</div>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  )
}
