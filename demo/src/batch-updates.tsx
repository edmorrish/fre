import { render, useState } from '../../src/index'

function App() {
  console.log(123)
  const [count, setCount] = useState(0)
  const up = () => {
    for (let i = 0; i < 10; i++) {
      setCount(i)
    }
  }
  return (
    <div>
      {count}
      <button onClick={up}>+</button>
    </div>
  )
}

render(<App />, document.getElementById('app'))
