import { useState } from 'react'
import './App.css'
import Sectionend from './component/sectionend'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App section1">
      <Sectionend/>
    </div>
  )
}

export default App
