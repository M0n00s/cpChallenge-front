import React from 'react'
import ReactDOM from 'react-dom/client'
// componente router
import { AppRouter } from './routers/AppRouter'
// browser import
import { BrowserRouter } from 'react-router-dom'
// store import
import { Provider } from 'react-redux'
import { store } from './redux/store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
