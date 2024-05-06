import resume from "../assets/resume.pdf"

export default function About() {
  return(
    <div className="main">
      <title>About</title>
      <h1>ABOUT ME</h1>
      <a href={resume} download="Resume - Ashe Kemuri"><div>Download Resume</div></a>
      <h2>Hi, My name is Ashe Kemuri</h2>
      <div className="paragraph">
        I'm a frontend developer. I started learning web development from <a href="https://www.theodinproject.com/">The Odin Project</a>.
        From there I moved onto making projects and learning from experience with help from Stack Overflow.
        While I'm a frontend developer I do have experience with the backend, specifically Ruby and Ruby on Rails.
        You might be wondering why someone with a Theatre degree is a web developer.
        The reason is I've always been interested in many things. So I went to college for theatre because it requires a lot of money and a lot of people to be in the same place.
        Meanwhile I could fulfill my interests in tech through the internet, both the creation of websites and interacting with the community.
        My time in theatre has also taught me many work related skills; how to work as a team, organizing a large undertaking from the ground up, communication skills, and so much more.
        I believe that you can always learn something useful from any experience or class, no matter how disconnected it seems from your day-to-day life.
      </div>
      <h3>Languages, Frameworks, and Other Technology I use</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li><a href="https://react.dev/">React</a></li>
        <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
        <li><a href="https://www.ruby-lang.org/en/">Ruby</a></li>
        <li><a href="https://rubyonrails.org/">Ruby on Rails</a></li>
        <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
        <li><a href="https://eslint.org/">ESlint</a></li>
        <li><a href="https://git-scm.com/">Git</a></li>
        <li><a href="https://github.com/">Github</a></li>
        <li><a href="https://www.npmjs.com/">npm</a></li>
        <li><a href="https://www.netlify.com/">Netlify</a></li>
        <li><a href="https://firebase.google.com/">Firebase</a></li>
        <li><a href="https://code.visualstudio.com/">VS Code Studio</a></li>
      </ul>
    </div>
  )
}