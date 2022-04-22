import logo from '../logo.svg'
import '../styles/index.scss'
import '../styles/App.css'
import Test from './Test'
import styles from '../styles/Test.module.scss'
import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(10)

  const handleClick = () => {
    setCounter((prev) => prev + 1)
    setCounter((prev) => prev + 1)
    setCounter((prev) => prev + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{counter}</h1>
        <button onClick={handleClick}>SET COUNTER</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p className={styles.Test}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Test />
      </header>
    </div>
  )
}

export default App
