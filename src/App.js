import React from 'react'
import './App.css'
import Counter from './component/counter/Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Increment and Decrement by Redux</h1>
          <Counter/>
      </header>
    </div>
  )
}

export default App
