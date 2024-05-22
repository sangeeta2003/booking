import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios";
const Register = () => {
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    function registerUser(e){
        e.preventDefault();
axios.get('http://localhost:4000/test')
    }
  return (
    <div className="mt-4 grow flex jusify-center justify-around">
      <div>

     
      <h1 className="text-4xl text-center mb-4 font-bold">Register</h1>
<form className="max-w-md mx-auto " onSubmit={registerUser}>
    <input type="text " placeholder="sangeeta m"value={name} onChange={e=>setName(e.target.value)}></input>
  <input type="email" placeholder="your@gmail.com" className="w-full border my-1 py-2 px-3 rounded-2xl"
  
  value={email} onChange={e=>setEmail(e.target.value)}></input>
  <input type="password" placeholder="password" className="w-full border my-1 py-2 px-3 rounded-2xl"
  value={password} onChange={e=>setPassword(e.target.value)}></input>
  <button className="bg-primary p-2 w-full text-white rounded-full">Register</button>
  <div className="text-center py-2 text-gray-500">
    Already a member?
  <Link to={'/login'} className="underline text-black text-semibold"> Login
  </Link>
  </div>
 
</form>
    </div>
    </div>
  )
}

export default Register