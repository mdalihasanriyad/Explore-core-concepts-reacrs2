
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import User from './User'

function App() {

  function handelClick(){
    alert('Button click')
  }
  const handelClick2 =()=>{
    alert("button click 2")
  }

  const addToFive = (num) =>{
    alert( num + 5 );
  }

  return (
    <>
      <h1>React Core Concepts 2</h1>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handelClick}>Click Me</button>
      <button onClick={handelClick2}>Click Me 2</button>
      <button onClick={()=>{
        alert("Third click")
      }}>Third</button>
      {/* Vejailla */}
      <button onClick={()=>addToFive(3)}>Four</button>
    </>
  )
}

export default App
