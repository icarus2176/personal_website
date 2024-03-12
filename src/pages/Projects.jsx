import gatheringList from "../assets/gathering-list.png"
import "./Project.css"

export default function Project() {
  return(
    <div className="main">
      <div className="project">
        <title>Projects</title>
        <h1>PROJECTS</h1>
        <div className="row">
          <a href="https://gathering-list.netlify.app/"><h2>Gathering List </h2></a>
          <div> | </div>
          <a href="https://github.com/icarus2176/gathering_list">Github Code</a>
        </div>
        <img className="screenshot" src={gatheringList} alt="A screenshot of a Gathering List a website. There is a logo at the top with the name of the website, follow by a grid of Magic the Gathering Cards." />
        <div className="paragraph">
          A website that has the user login using their Google account, and keeps a list of Magic the Gathering Cards via Google Firebase.
          Clicking the "Add" button in the bottom right opens a dialog from where the user can search cards by name through the Scryfall API.
          Displays the card, price, and lets the user change between nonfoil and foil.
          Hovering over the card displays additional information.
          Cards can be changed between foil and nonfoil, added, and removed
        </div>
        <h3>Utilizes</h3>
        <ul>
          <li>HTML, CSS, and Javascript</li>
          <li>React</li>
          <li><a href="https://scryfall.com/docs/api">Scryfall API</a></li>
          <li><a href="https://firebase.google.com/">Firebase Auth, UI, and Database</a></li>
        </ul>
      </div>
    </div>
  )
}