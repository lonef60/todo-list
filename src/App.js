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
	/*Public mQENBF+1CFkBCACikZLy0sjx5s1yrwWlYr+Lnr1mLoRQIc5Rg7+SS8cBWkum2JR8
uDXcVTYbDwZB4wA4w02qp7Bo8qMJ0jEeXUdJION8dmy1XRSb/2YVwC+Rj3YThWDw
D5lACUhKnMjVkOg7m8igJv3BWbwKgozNaWTTpbu2hWKMhOZo1rTy5SgoZTcd2fX+
I9BwkUB6+0SUAHfMy8y+AFlL2d1YtWSy3Qt8ath9rOGLtfy28TmRc6lVLoPX4Pa7
9dlSLPUJpe60CmEh4AYqEZaPf/Zn2ioiBlzE+qU/iM0qaYibFAW6PSqDpXHFnSaG
BYNVHhJ9jYnmqIPLpSbIiSannbaCGGjguhyXABEBAAG0FWRhdmluc2Nvc3RhQGdt
YWlsLmNvbYkBHAQQAQIABgUCX7UIWQAKCRAMEQfXBhBnhK4zB/9whfi1xuvt6q7D
l1MIxd2Joc523n88nV/q0jMaziXcnhSdbK7ae9p1ZaPfYDfDXZoMUUrD56i+tGy7
/4VAiLyL1T2srMhAFgCuf6H2jqQQ7LFah5g+0Iqn562OfgQYV1LwgNH0aqgEgVOG
IRjJCrrTLNVcF2Ik5YvTl092TSLb2xtwbYqC/5E5j4XVHk5AgCD84EaStAId0ClN
SHsQBpT4T8oeT1zmghjjoRNsdrgw1+7u3ODLpMVdeLA06aWSA+8ulds7OUWpPw24
Da8PvkdVQhnLADuCK3dZ9WJJO/Nxw1ReGOKrk1ODW3p3GnagQX37upAx4KFFLf3v
ijn+FeBY
=NxRc */
      <div className="todo-app container">
        <h1 className="center blue-text">Tarefas </h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <Add addTodo={this.addTodo} />
        <h6>Criado por Davi Costa em 2020 :)</h6>
      </div>
    );
  }
}

export default App;
