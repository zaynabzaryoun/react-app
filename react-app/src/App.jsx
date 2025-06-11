import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card = ({title}) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h2>helloo</h2>
        <Card title= "star wars" /> 
        <Card title="avatar" /> 
        <Card title="lion king" />
    </div>
  )
}

export default App
