import './Todo.css'
import TodoList from './TodoList'

const Todo = () => {
  const todos = [
    {
      id: 1,
      title: 'Work'
    }, {
      id: 2,
      title: 'Sleep'
    }, {
      id: 3,
      title: 'Work'
    },
  ]

  return (
    <div className='container'>
      <h3> Todo List </h3>

      <TodoList data={todos} />
    </div>
  )
}

export default Todo