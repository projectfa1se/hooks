import React, {useState} from 'react'
import './App.css';

function computeInitialCounter(){
  console.log('compute')
  return Math.trunc(Math.random()*20)
}

function App() {
  const [counter,setCounter] = useState(()=>{
    return computeInitialCounter()
})

  const [state,setState] = useState({
    title: 'Счётчик',
    date: Date.now()
  })

  function increment(){
    setCounter((prevCounter)=>{
      return prevCounter+2
    })
  }

  function decrement(){
    setCounter(counter-1)
  }

  function updateTitle(){
    setState((prev)=>{
      return {
        ...prev,
        title: 'Новое название'
      }
    })
  }

  return (
    <div>
      <h1>Счетчик: {counter}</h1>
      <button onClick={increment} className='btn success'>Добавить</button>
      <button onClick={decrement} className='btn danger'>Убрать</button>
      <button onClick={updateTitle} className='btn default'>Изменить название</button>

      <pre>{JSON.stringify(state)}</pre>
    </div>
  );
}

export default App;
