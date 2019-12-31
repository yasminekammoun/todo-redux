import React from 'react';
import './App.css';
import Header from './components/Layout/Header';
import uuid from 'uuid'


class App extends React.Component {
  state = {
    todos: [
      {
        title: ' Take out the trash',
        id: 1,
        completed: false
      }

    ]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    })
  }
  markDelete = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }



  onChange = (e) => this.setState({ [e.target.name]: e.target.value });


  addtodo = () => {
    const newTodo = {
      id: uuid(),
      title: this.state.title,
      completed: false,
    }
    this.setState({ todos: [...this.state.todos, newTodo], title: "" })
  }


  render() {
    return (
      <div className="App">
        <div className="jumbotron text-white rounded bg-dark text-center">
          <div className="container">
            <Header />
            <form style={{ display: "flex" }}>
              < input type="text"
                name='title'
                onChange={this.onChange}
                value={this.state.title}
                style={{ flex: "10", padding: '5px' }}
                placeholder='Add Todo ..' />
              <input type="button" value="add"
                class="btn btn-lg btn-secondary"
                onClick={this.addtodo}
                style={{ flex: '1'}} />
            </form></div>

          {this.state.todos.map(el =>
            <div className="style">
             <div className="chck">  
              <input type="checkbox" style={this.btnStyle} onChange={() => this.markComplete(el.id)} />
              <h5 className={el.completed ? 'completed-task' : undefined}>{el.title}</h5>  </div>
              <button className="btn btn-danger" onClick={() => this.markDelete(el.id)}>x</button>
           
          </div>
          
          )}
        </div>
      </div>
    )
  }
 }

export default App;
