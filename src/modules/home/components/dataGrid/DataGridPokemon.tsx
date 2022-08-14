import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import React from 'react'
import { IStats } from '../../interfaces'

interface IDataGridPokemonProps {
  stats: IStats[]
}
export const DataGridPokemon = ({ stats }: IDataGridPokemonProps) => {
  const rows: GridRowsProp = stats.map((stat, index) => {
    return {
      id: index + 1,
      name: stat.stat.name,
      value: stat.base_stat,
    }
  })

  const columns: GridColDef[] = [
    {
      headerName: 'Id',
      field: 'id',
      width: 100,
    },
    {
      headerName: 'Name',
      field: 'name',
      sortable: true,
      width: 150,
      type: 'text',
    },
    {
      headerName: 'Value',
      field: 'value',
      sortable: true,
      width: 150,
      type: 'number',
    },
  ]
  return (
    <div style={{ height: 'calc(100vh - 300px)', width: '100%', paddingBottom: '2rem' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  )
}
