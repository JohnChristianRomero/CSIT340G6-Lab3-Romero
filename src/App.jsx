const Header = (props) => <h1>{props.course}</h1>

const Part = (props) => <p>{props.part.name} {props.part.units}</p>

const Content = (props) => (
  <div>
    <Part part={props.part1} />
    <Part part={props.part2} />
    <Part part={props.part3} />
  </div>
)

const Total = (props) => (
  <p>Number of units {props.part1.units + props.part2.units + props.part3.units}</p>
)

const Footer = (props) => (
  <footer>{props.fullName} - {props.courseCode} - {props.section}</footer>
)

const App = () => {
  const course = 'Bachelor of Science in Information Technology'
  const part1 = {
    name: 'Data Analytics',
    units: 3
  }
  const part2 = {
    name: 'Technopreneur',
    units: 3
  }
  const part3 = {
    name: 'Human Computer Interaction',
    units: 3
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
      <Footer fullName="John Christian Romero" courseCode="CSIT340" section="G6" />
    </div>
  )
}

export default App