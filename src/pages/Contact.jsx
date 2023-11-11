import githubLogo from "../assets/github-mark-white.svg"
import gmailLogo from "../assets/gmail-logo.png"
import linkedinLogo from "../assets/LI-In-Bug.png"
import "./Contact.css"

export default function Contact() {
  return(
    <div className="main contact">
      <h1>Where to Find Me</h1>
      <div className="row">
        <img className="logo" src={githubLogo} alt="Github Logo"></img>
        <a href="https://github.com/icarus2176">My Github Account</a>
      </div>
      <div className="row">
        <img className="logo" src={linkedinLogo} alt="LinkedIn Logo"></img>
        <a href="www.linkedin.com/in/ashe-kemuri-bb9907298">My LinkedIn Profile</a>
      </div>
      <div className="row">
        <img className="logo" src={gmailLogo} alt="Gmail Logo"></img>
        <div>Email: ashe.kemuri@gmail.com</div>
      </div>
    </div>
  )
  
}