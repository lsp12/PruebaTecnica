import { Container, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useAppDispatch } from '../../../app/hooks'
import { apiPoke } from '../actions/home.action'
import { LeftComponents } from '../components/leftComponent/Index'
import { RightComponent } from '../components/rightComponent/Index'

export const Home = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(apiPoke())
  }, [dispatch])
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <LeftComponents />
        </Grid>
        <Grid item xs={12} md={6}>
          <RightComponent />
        </Grid>
      </Grid>
    </Container>
  )
}
