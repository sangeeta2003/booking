import Header from "./Header"
import { Outlet } from "react-router-dom"
const Layout = () => {
  return (
    <div className="flex p-4 flex-col">
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Layout