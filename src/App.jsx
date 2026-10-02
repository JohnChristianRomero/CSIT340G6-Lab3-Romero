const Header = (props) => <h1>{props.course}</h1>

const Part = (props) => <p>{props.name} {props.units}</p>

const Content = (props) => (
  <div>
    <Part name={props.parts[0].name} units={props.parts[0].units} />
    <Part name={props.parts[1].name} units={props.parts[1].units} />
    <Part name={props.parts[2].name} units={props.parts[2].units} />
  </div>
)

const Total = (props) => (
  <p>Number of units {props.parts[0].units + props.parts[1].units + props.parts[2].units}</p>
)

const Footer = (props) => (
  <footer>{props.fullName} - {props.courseCode} - {props.section}</footer>
)

const App = () => {
  const course = 'Bachelor of Science in Information Technology'
  const parts = [
    { name: 'Data Analytics', units: 3 },
    { name: 'Technopreneur', units: 3 },
    { name: 'Human Computer Interaction', units: 3 },
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer fullName="John Christian Romero" courseCode="CSIT340" section="G6" />
    </div>
  )
}

export default App