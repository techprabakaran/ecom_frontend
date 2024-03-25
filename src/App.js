import React from 'react'
import {
  Route,
  Routes
} from 'react-router-dom'
import Landing from './pages/landing'
import { Provider } from 'react-redux';
import { store }  from './stores/global.js';
import Loading from './components/loading'

function App () {
  return (
    <Provider store={store}>      
      <Loading />
      <Routes>
        <Route exact path='/' element={<Landing />} />
      </Routes>
    </Provider>
  )
}

export default App
