import React from 'react'
import AppRouter from './config/router/AppRouter'
import { Provider } from 'react-redux'
import store from '../src/redux/store/store'
function App() {
  return (
    <>
    <Provider store={store}>

    <AppRouter/>
    </Provider>
    
    
    
    
    </>
  )
}

export default App