import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"



const App = () =>{
  return(
    <section>
      <h1>Phineas and Ferb Portfolio</h1>
      <Navbar />
      <Outlet />
    </section>
  )
}

export default App