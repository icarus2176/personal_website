import githubLogo from "../assets/github-mark-white.svg"
import gmailLogo from "../assets/gmail-logo.png"
import linkedinLogo from "../assets/LI-In-Bug.png"
import ContactForm from "../components/ContactForm"
import "./Contact.css"

export default function Contact() {
  return(
    <div className="main contact">
      <title>Contact Me</title>\
      <h1>CONTACT ME</h1>
      <div className="sideByside">
        <div className="column">
          <h2>Find Me At</h2>
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
            <div>ashe.kemuri@gmail.com</div>
          </div>
          <div className="row">
            <img className="logo" src="https://www.theodinproject.com/mstile-310x310.png" alt="Odin Project Logo"></img>
            <a href="https://www.theodinproject.com/">Check out The Odin Project!</a>
          </div>
        </div>
        <div className="column">
          <h2>Or Fill Out This Form</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
  
}