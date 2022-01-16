import './TodoList.css'

const TodoList = (props) => {
  return (
    <ul> {
      props.data.map((k) => {
        return <li key={k.id}> {k.title} </li>
      })
    }</ul>
  )
}

export default TodoList