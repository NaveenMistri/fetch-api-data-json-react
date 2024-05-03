import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'

function App() {
  const [Cards, setCards] = useState([])
  
  const fetchData = async ()=>{
    let a = await fetch("https://jsonplaceholder.typicode.com/comments")
    let data = await a.json()
    setCards(data)
    console.log(data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  

  return (
    <>
    <Navbar/>
  <div className="container">
    {Cards.map((card)=>{
   return <div className="cards" key={card.id}>
    <p>Id : {card.id}</p>
    <p>Name : {card.name}</p>
    <p>Email : {card.email}</p>
    <p>Body : {card.body}</p>
   </div>

    }

    )}
  </div>
    </>
  )
}

export default App
