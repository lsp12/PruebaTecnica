import { Box, Button, Container, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { setTheme } from '../../shared/slice/ui.slice'
import { apiPoke } from '../actions/home.action'
import { LeftComponents } from '../components/leftComponent/Index'
import { RightComponent } from '../components/rightComponent/Index'
import Sol from '@mui/icons-material/Brightness7'
import Luna from '@mui/icons-material/Brightness4'

export const Home = () => {
  const { theme } = useAppSelector((state) => state.ui)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(apiPoke())
  }, [dispatch])
  return (
    <Container>
      <Box>
        <Button
          onClick={() => {
            dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
          }}
        >
          {theme === 'light' ? <Sol /> : <Luna />} Change theme
        </Button>
      </Box>
      <Grid container spacing={2} pt={5}>
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
