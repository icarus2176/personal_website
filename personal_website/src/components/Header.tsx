import { Link, Outlet } from "react-router-dom" 

export default function Header() {
return(
  <div>
    <Link  to="/">Home</Link>
    <Link  to="/about">About Me</Link>
    <Link  to="/projects">Projects</Link>
    <Link  to="/contact">Contact Me</Link>
  </div>
)
}