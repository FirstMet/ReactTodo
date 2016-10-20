import React from 'react';
import uuid from 'node-uuid';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

import TodoAPI from 'TodoAPI';

class TodoApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showCompleted: false,
            searchText: '',
            todos: TodoAPI.getTodos()
        }
    }

    componentDidUpdate() {
        TodoAPI.setTodos(this.state.todos);
    }

    handleAddTodo(text) {
        this.setState({
            todos: [
                ...this.state.todos, {
                    id: uuid(),
                    text: text,
                    completed: false
                }
            ]
        });
    }

    handleToogle(id) {
        var updatedTodos = this.state.todos.map((todo) => {

            if(todo.id === id) {
                todo.completed = !todo.completed;
            }

            return todo;
        });

        this.setState({
            todos: updatedTodos
        })
    }

    handleSearch(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    }

    render() {
        return(
            <div>
                <TodoSearch onSearch={this.handleSearch.bind(this)} />
                <TodoList todos={this.state.todos} onToggle={this.handleToogle.bind(this)} />
                <AddTodo onAddTodo={this.handleAddTodo.bind(this)} />
            </div>
        )
    }
}

export default TodoApp;
