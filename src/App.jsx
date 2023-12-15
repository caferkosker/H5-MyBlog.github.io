
function App() {

  const userName="Cafer Köşker"
  const hobbies=["Software", "Games", "Cars", "Exchange"]
  const programming_languages=["Python","Java","JavaScript","HTML","CSS","React"]
  const languages=["Turkish","English"]
  const projects=["First Week: Calculator Assignment","Second Week: Sudoku Assignment","Third Week: Bootstrap Assignment","Fourth Week: JavaScript Assignment","Fifth Week:React Assignment"]



  return (
    <>
    <h1 className="bg-red">My Blog</h1>
    <hr />
    <h2>About Me</h2>
    <p>Hello, I am Cafer Kosker! I'm a second-year student majoring in computer engineering at Konya Food and Agriculture University. My interests lie in artificial intelligence, machine learning, and React.js. I've been diving into various programming languages like Python, C, and Java as part of my coursework and ongoing self-study in software development.</p>
    <hr />
    <h2>My Hobbies</h2>
    <ul>
      {hobbies.map((hobbie,index) =><li key={index}>{hobbie}</li>)}
    </ul>
    <hr />
    <h2>Projects</h2>
    <ul>
      {projects.map((project,index) =><li key={index}>{project}</li>)}
    </ul>
    <hr />
    <h2>Programming Languages</h2>
    <ul>
      {programming_languages.map((programming_language,index) =><li key={index}>{programming_language}</li>)}
    </ul>
    <hr />
    <h2>Languages</h2>
    <ul>
      {languages.map((language,index) =><li key={index}>{language}</li>)}
    </ul>



    </>
  )
}

export default App
