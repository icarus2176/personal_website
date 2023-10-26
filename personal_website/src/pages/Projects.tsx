import gatheringList from "../assets/gathering-list-home.png"
import Header from "../components/Header"

export default function Project() {
  return(
    <>
      <Header />
      <h1>Projects</h1>
      <a href="https://gathering-list.netlify.app/"><h2>Gathering List</h2></a>
      <a href="https://github.com/icarus2176/gathering_list">Github</a>
      <img src={gatheringList} alt="A screenshot of a Gathering List a website. There is a logo at the top with the name of the website, follow by a grid of Magic the Gathering Cards." />
      <div>
        A website that has the user login using their Google account, and keeps a list of Magic the Gathering Cards.
        Clicking the "Add" button in the bottom right opens a dialog from where the user can search cards by name.
        Displays the card, price, and lets the user change between nonfoil and foil.
        Hovering over the card displays additional information.
        Cards can be added and removed.
      </div>
      <h3>Uses</h3>
      <ul>
        <li>HTML, CSS, and Javascript</li>
        <li>React</li>
        <li><a href="https://scryfall.com/docs/api">Scryfall API</a></li>
        <li><a href="https://firebase.google.com/">Firebase Auth, UI, and Database</a></li>
      </ul>
    </>
  )
}