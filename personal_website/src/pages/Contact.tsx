import githubLogo from "../assets/github-mark.svg"
import gmailLogo from "../assets/gmail-logo.png"
import Header from "../components/Header"

export default function Contact() {
  return(
    <>
      <Header />
      <img src={githubLogo} alt="Github Logo"></img>
      <a href="https://github.com/icarus2176">Find me on Github!</a>
      <img src={gmailLogo} alt="Gmail Logo"></img>
      <div>ashe.kemuri@gmail.com</div>
    </>
  )
  
}