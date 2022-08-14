import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../../../../../app/hooks'

export const Presentation = () => {
  const { sprites, name } = useAppSelector((state) => state.home)
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Typography variant='h4' textAlign={'center'} fontWeight={'bold'}>
          Pokemon found!
        </Typography>
        <Typography variant='h6' textTransform={'capitalize'}>
          {name}
        </Typography>
      </Grid>
      <Grid item xs={12} md={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Typography>Back image</Typography>
              </Grid>
              {sprites?.back_default && (
                <Grid item xs={12} md={4}>
                  <img src={sprites.back_default} alt='back_default' />
                </Grid>
              )}
              {sprites?.back_female && (
                <Grid item xs={12} md={4}>
                  <img src={sprites.back_female} alt='back_default' />
                </Grid>
              )}
              {sprites?.back_shiny && (
                <Grid item xs={12} md={4}>
                  <img src={sprites.back_shiny} alt='back_default' />
                </Grid>
              )}

              {sprites?.back_shiny_female != null && (
                <Grid item xs={12} md={4}>
                  <img src={sprites.back_shiny_female} alt='back_default' />
                </Grid>
              )}
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Typography>Image the front</Typography>
              </Grid>
              {sprites?.front_default && (
                <Grid item xs={12} md={4}>
                  <img src={sprites.front_default} alt='back_default' />
                </Grid>
              )}
              {sprites?.front_female && (
                <Grid item xs={12} md={4}>
                  <img src={sprites.front_female} alt='back_default' />
                </Grid>
              )}
              {sprites?.front_shiny && (
                <Grid item xs={12} md={4}>
                  <img src={sprites.front_shiny} alt='back_default' />
                </Grid>
              )}
              {sprites?.front_shiny_female && (
                <Grid item xs={12} md={4}>
                  <img src={sprites.front_shiny_female} alt='back_default' />
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
