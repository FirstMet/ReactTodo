import React from 'react';

import TodoList from 'TodoList';

class TodoApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
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

    render() {
        return(
            <div>
                <TodoList todos={this.state.todos} />
            </div>
        )
    }
}

export default TodoApp;
