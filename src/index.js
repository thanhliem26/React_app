import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './common/components/Nav/Nav'
import Table from './pages/Table/Table'
import ReactToolTip from './pages/ToolTip/tooltip'
import DetailTable from './pages/Detail/index'
import { Provider } from 'react-redux'
import store from './store/reducer/rootReducer'
import TestComponent from './pages/TestComponent/index'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/table" element={<Table />} />
        <Route path="/tooltip" element={<ReactToolTip />} />
        <Route path="/exampleStyled" element={<TestComponent />} />
        <Route path="/table/:id" element={<DetailTable />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  // </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
