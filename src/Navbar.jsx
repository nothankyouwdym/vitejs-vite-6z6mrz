import { Link } from "react-router-dom"


const Navbar = () =>{
  return(
    <section>
      <nav>
        <span><Link to="/">Home</Link></span>
        <span><Link to="/About-Us">About</Link></span>
        <span><Link to="/Things-We've-Done">Things we've done</Link></span>
        <span><Link to="/Goals">Goals</Link></span>
        <span><Link to="/Accomplishments">Accomplishments</Link></span>
        <span><Link to="/Education">Education</Link></span>
      </nav>
    </section>
  )
}

export default Navbar