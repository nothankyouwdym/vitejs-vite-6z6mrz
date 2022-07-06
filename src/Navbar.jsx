import { Link } from "react-router-dom"


const Navbar = () =>{
  return(
    <section>
      <nav>
        <span><Link to="/">Home</Link></span>
        <span><Link to="/About-Us">About</Link></span>
      </nav>
    </section>
  )
}

export default Navbar