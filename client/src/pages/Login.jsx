import { Link } from "react-router-dom"


const Login = () => {
  return (
    <div className="mt-4 grow flex jusify-center justify-around">
      <div>

     
      <h1 className="text-4xl text-center mb-4">Login</h1>
<form className="max-w-md mx-auto ">
  <input type="email" placeholder="your@gmail.com" className="w-full border my-1 py-2 px-3 rounded-2xl"></input>
  <input type="password" placeholder="password" className="w-full border my-1 py-2 px-3 rounded-2xl"></input>
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