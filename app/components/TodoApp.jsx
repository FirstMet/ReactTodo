import React from 'react';
import uuid from 'node-uuid';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

class TodoApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: 'Watch the game',
                    completed: true
                }, {
                    id: uuid(),
                    text: 'Celebrate the won',
                    completed: false
                }, {
                    id: uuid(),
                    text: 'Walk the dog',
                    completed: false
                }, {
                    id: uuid(),
                    text: 'Feed the cat',
                    completed: true
                }
            ]
        }
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
