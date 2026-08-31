import './App.css'
import { createSignal } from 'solid-js'


function App() {
const [count, setCount] = createSignal(0)
 
 console.log ("!!App renderas!!")

  return (
    <>
      <h1>Hello Solid JS!</h1>

      <p>{count()}</p>

      <button onClick={() => setCount(count() + 1)}>+1</button>

    </>
  )
}

export default App
