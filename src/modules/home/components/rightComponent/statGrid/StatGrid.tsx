import { Grid } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../../../../../app/hooks'
import { DataGridPokemon } from '../../dataGrid/DataGridPokemon'

export const StatGrid = () => {
  const { stats } = useAppSelector((state) => state.home)
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        {stats && stats.length > 0 ? <DataGridPokemon stats={stats} /> : <div>No stats</div>}
      </Grid>
    </Grid>
  )
}
