import { Link } from "react-router-dom" 
import "./Header.css"

export default function Header() {
return(
  <div className="header">
    <Link className="link" to="/">Home</Link>
    <Link className="link" to="/about">About</Link>
    <Link className="link" to="/projects">Projects</Link>
    <Link className="link" to="/contact">Contact</Link>
  </div>
)
}