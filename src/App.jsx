import { useState } from "react"
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

// Create query client
const queryClient = new QueryClient()

import List from "./components/List"

const API_URL = "https://pokeapi.co/api/v2/pokemon/"

function App() {
  const [show, setShow] = useState(true)

  function toggleComponent() {
    setShow(
      (previousState) => !previousState
    )
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <button onClick={toggleComponent}>Toggle Component</button>
        {
          show &&
          <List url={API_URL} />
        }
      </div>
    </QueryClientProvider>
  )
}

export default App
