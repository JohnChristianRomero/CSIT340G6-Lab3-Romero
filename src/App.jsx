const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => (
  <div>
    <p>{props.part1} {props.units1} units</p>
    <p>{props.part2} {props.units2} units</p>
    <p>{props.part3} {props.units3} units</p>
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