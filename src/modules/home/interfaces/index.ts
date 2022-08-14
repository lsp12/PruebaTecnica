export interface IStat {
  name: string
  url: string
}

export interface IStats {
  base_stat: number
  effort: number
  stat: IStat
}

export interface ISprites {
  back_default: string
  back_female: null
  back_shiny: string
  back_shiny_female: null
  front_default: string
  front_female: null
  front_shiny: string
  front_shiny_female: null
}

export interface IPokemonInfo {
  sprites: ISprites
  stats: IStats[]
}

export interface IResults {
  name: string
  url: string
}

export interface IPokemons {
  count: number
  next: string
  previous: string
  results: IResults[]
}
