import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from "./about"

const data: string[] = ["a","b","c","d"]

function App() {
  // const [count, setCount] = useState(0)
  const [state, setState] = useState<string>("test")
  return (
    <div className='main'>
      <h1>Hello World</h1>
      <About data={data} func={setState} />
      <h1>{state}</h1>
      <input onChange={(e) => setState(state + e.target.value)} />
      {/*<button onClick={() => setState("state set!")}>click meeee</button>*/}
      
      {/*data.map((item,idx) => (
         <h4 key = {idx}>{item}</h4>
      ))*/}
      
      {/** */}
    </div>
  )
}

export default App
