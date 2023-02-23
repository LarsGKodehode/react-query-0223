import { useState, useEffect } from "react"
import {
  useQuery,
  useQueryClient
} from 'react-query'

async function fetchPokemons(url) {
  const response = await fetch(url)
  const data = await response.json()

  return data
}

function List(props) {
  const { url } = props

  const { isLoading, data } = useQuery('pokemonList', () => fetchPokemons(url), { staleTime: Infinity, refetchInterval: 10000 })

  return (
    <ul>
      {
        isLoading
          ? <h1>Loading...</h1>
          : <h1>{data.count}</h1>
      }
    </ul>
  )
}

export default List