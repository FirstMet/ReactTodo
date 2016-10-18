import React from 'react';

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
                    id: 1,
                    text: 'Watch the game'
                }, {
                    id: 2,
                    text: 'Celebrate the won'
                }, {
                    id: 3,
                    text: 'Walk the dog'
                }, {
                    id: 4,
                    text: 'Feed the cat'
                }
            ]
        }
    }

    handleAddTodo(text) {
        alert('new todo: ' + text);
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
