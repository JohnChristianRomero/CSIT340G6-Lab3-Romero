const Header = (props) => <h1>{props.course}</h1>

const Part = (props) => <p>{props.name} {props.units}</p>

const Content = (props) => (
  <div>
    <Part name={props.part1} units={props.units1} />
    <Part name={props.part2} units={props.units2} />
    <Part name={props.part3} units={props.units3} />
  </div>
)

const Total = (props) => <p>Number of units {props.total}</p>

const Footer = (props) => (
  <footer>{props.fullName} - {props.courseCode} - {props.section}</footer>
)

const App = () => {
  const course = 'Bachelor of Science in Information Technology'
  const part1 = 'Data Analytics'
  const units1 = 3
  const part2 = 'Technopreneur'
  const units2 = 3
  const part3 = 'Human Computer Interaction'
  const units3 = 3

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1} units1={units1}
        part2={part2} units2={units2}
        part3={part3} units3={units3}
      />
      <Total total={units1 + units2 + units3} />
      <Footer fullName="John Christian Romero" courseCode="CSIT340" section="G6" />
    </div>
  )
}

export default App