import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card = ({ title }) => {

  const [count, setCount] = useState(0);
  const [hasLiked, setHasliked] = useState(false)
  useEffect(() => {
    console.log(`${title} movie has been liked: ${hasLiked}`);
    
  }, [hasLiked])

  // useEffect(() => {
  //   console.log("card rendered");
    
  // }, [])

  return (
    <div className="card" onClick={()=>setCount((prev)=> prev + 1)}>
      <h2>{title} {count ? count : null}</h2>

      <button onClick={() => setHasliked(!hasLiked)}>
        {hasLiked? "liked" :  "like"}
      </button>
    </div>
  )
}

const App = () => {
  
  return (
    <div className="card-container">
      <Card title="star wars" rating={5} isCool={true} /> 
        <Card title="avatar" /> 
        <Card title="lion king" />
    </div>
  )
}

export default App
