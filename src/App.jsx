import React, {useState,useEffect} from 'react'
import './App.css';

export default function App(){
  const [type,setType] = useState('users')

  useEffect(()=>{
    console.log('render')
  })
  return(
    <>
    {/* 27:27 */}
      <h1>Ресурс: {type}</h1>

      <button onClick={()=>{
        setType('users')
      }}>Пользователи</button>

      <button onClick={()=>{
        setType('TODO')
      }}>TODO</button>
      
      <button onClick={()=>{
        setType('posts')
      }}>Посты</button>
    </>
  )
}
