import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios";
const Login = () => {
const[email,setEmail] = useState();
const[password,setPassword] = useState();

async function LoginUser(e){
e.preventDefault();
try{
  await axios.post('/login',{email,password})
  alert('login successfully')
}catch(e){
  console.log(e);
}

}
  return (
    <div className="mt-4 grow flex jusify-center justify-around">
      <div>

     
      <h1 className="text-4xl text-center mb-4">Login</h1>
<form className="max-w-md mx-auto "onSubmit={LoginUser}>
  <input type="email" placeholder="your@gmail.com" className="w-full border my-1 py-2 px-3 rounded-2xl"
  value={email} onChange={e=>setEmail(e.target.value)}></input>
  <input type="password" placeholder="password" className="w-full border my-1 py-2 px-3 rounded-2xl"
  value={password} onChange={e=>setPassword(e.target.value)}></input>
  <button className="bg-primary p-2 w-full text-white rounded-full">Login</button>
  <div className="text-center py-2 text-gray-500">
     Don`t have an account yet?
  <Link to={'/register'} className="underline text-black"> Register Now
  </Link>
  </div>
 
</form>
    </div>
    </div>
  )
}

export default Login