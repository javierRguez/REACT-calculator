import React, { useState } from 'react'
import words from 'lodash.words'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'
import './App.css'

const App = () => {
  const [stack, setStack] = useState("")

  const items = words(stack, /[^-^+^*^/]+/g)
  return (
    <main className="react-calculator">
      <Result value={undefined} />
      <Numbers onClickNumber={(number) => console.log(number)} />
      <Functions onClickClear={() => console.log('clear')} onClickDelete={() => console.log('delete')} />
      <MathOperations onClickOperation={(operation) => console.log(operation)} onClickEqual={(equal) => console.log(equal)} />
    </main>
  )
}

export default App
