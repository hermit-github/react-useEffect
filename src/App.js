import {useState,useEffect} from 'react'
import './App.css';

function App() {
  const [user, setUser] = useState([])
  const [id, setId] = useState(1)

  useEffect(() =>{
    let subs = true
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
    .then(data => {
      if(subs){
        setUser(data)
      }
    })

    return () => {
      subs = false
    }
  },[id])



  return (
    <div className='App'>
      <div className="" style={{display:"flex",gap:'10px'}}>
        <button onClick={() => setId(1)}>Id 1</button>
        <button onClick={() => setId(2)}>Id 2</button>
        <button onClick={() => setId(3)}>Id 3</button>
      </div>
      
      <div className="user">
        <p>Name:{user.name}</p>
        <p>Username:{user.username}</p>
        <p>Email:{user.email}</p>
      </div>
    </div>
  )
}

export default App;
