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
                    text: 'Watch the game'
                }, {
                    id: uuid(),
                    text: 'Celebrate the won'
                }, {
                    id: uuid(),
                    text: 'Walk the dog'
                }, {
                    id: uuid(),
                    text: 'Feed the cat'
                }
            ]
        }
    }

    handleAddTodo(text) {
        this.setState({
            todos: [
                ...this.state.todos, {
                    id: uuid(),
                    text: text
                }
            ]
        });
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
                <TodoList todos={this.state.todos} />
                <AddTodo onAddTodo={this.handleAddTodo.bind(this)} />
            </div>
        )
    }
}

export default TodoApp;
