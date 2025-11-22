

import './App.css'
import { BrowserRouter } from 'react-router-dom'
import {AppRouter} from '../src/router/AppRouter'
import { SchemaMarkup } from './SchemaMarkup'

function App() {


  return (
    <>
    <SchemaMarkup />
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
    </>
  )
}

export default App
