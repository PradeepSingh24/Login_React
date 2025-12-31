import './index.css'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


function App() {
  const [user,setUser]=useState("")
  const [pass,setPass]=useState("")

  const navigate = useNavigate();

  function handleUser(event){
    setUser(event.target.value);
  }

  function handlePass(event){
    setPass(event.target.value);
  }

  function check(e){
    e.preventDefault();
    var loginDetails = axios.post('http://localhost:3000/login',{username:user,password:pass}) 
    loginDetails.then(function(data){
      if(data.data === true){
        navigate("/success")
      }
      else{
        navigate("/fail")
      }
    })
   }

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center py-12">
      <div className="w-full max-w-sm px-4">
        <div className="bg-neutral-800 px-8 py-10 rounded-md shadow-md text-center">
          <h1 className="text-5xl font-semibold text-white mb-6 tracking-wide">Instagram</h1>

          <form className="space-y-4" onSubmit={check} method="post">
            <input
              type="text" name="username"
              placeholder="Name" onChange={handleUser}
              className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded text-neutral-200 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />

            <input
              type="password"  onChange={handlePass} name ="password"
              placeholder="Password"
              className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded text-neutral-200 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />

            <button onClick={check}
              type="submit"
              className="w-full py-2 mt-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium"
            >
              Log in
            </button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default App
