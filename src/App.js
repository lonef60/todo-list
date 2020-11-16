import React, {Component} from 'react'
import Todos from './Todos'
import Add from './Add'
class App extends Component{
  state = {
    todos: [
      {id: 1, content: 'Arrumar a casa'},
      {id: 2, content: 'Ir no mercado'}

    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;

    })
    this.setState ({
      todos: todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Tarefas </h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <Add addTodo={this.addTodo} />
        <h6>Criado por Davi Costa :)</h6>
      </div>
    );
  }
}

export default App;
