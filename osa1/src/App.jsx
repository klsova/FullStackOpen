const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Content = (props) => {
  console.log(props)
  return (
    <div>
      {props.part} {props.exercises}
    </div>
  )
}
const Total = (props) => {
  console.log(props)
  return (
    <p>{props.total} {props.exercises}</p>
  )
}

const App = () => {

  return (
    <div>
      <Header course="Half Stack application development" />
      <Content part="Fundamentals of React" exercises= {10} />
      <Content part="Using props to pass data" exercises = {7} />
      <Content part="State of a component" exercises = {14} />
      <Total total="Number of exercises" exercises = {21} />
    </div>
  )
}
export default App
