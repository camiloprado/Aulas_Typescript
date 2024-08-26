import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [countplus, setCount] = useState(0)
  const [countminus, setMinus] = useState(0)
  const [sum, setSum] = useState(0)
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href={reactLogo} target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Testando a sincronização real</h1>
      <div className="card">
        <button onClick={() => setCount((countplus) => countplus + 1)}>
          count is {countplus}
        </button>
        <button onClick={() => setMinus((countminus) => countminus - 1)}>
          count is {countminus}
        </button>
        <button onClick={() => setSum(countminus + countplus)}>
          Sum is {sum}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
