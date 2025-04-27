import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import ThemeProvider from "./pages/other/ThemeProvider"
import Pokemon from "./components/pokemon/Pokemon"

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/pokemon/:pokemonName" element={<Pokemon />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
