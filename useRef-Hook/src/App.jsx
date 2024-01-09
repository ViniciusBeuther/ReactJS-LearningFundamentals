import { useRef } from "react"
import { useState } from "react"
import RefExample from "./RefExample"

const App = () => {
  
  const handleShowValues = () => {
    return alert(`
      State: ${state}\n
      Variable: ${variable}\n
      useRef: ${ref.current}
    `)
  }

  const [state, setState] = useState(0)
  let variable = 0
  let ref = useRef(0)

  return (
    <div>
      <h1>useRef( )</h1>
      <hr />
      <h2>Valores</h2>
      <p>State: {state}</p>
      <p>Variable: {variable}</p>
      <p>Ref: {ref.current}</p>
      <button onClick={handleShowValues}>Mostrar valores na Memória</button>
      
      <button onClick={() => setState(state + 1)}>
        Aumentar State
      </button>

      <button onClick={() => variable++}>Aumentar variavel</button>
      
      <button onClick={() => ref.current++}>Aumentar ref</button>
      <hr />
      <RefExample />
    </div>
  )
}

export default App