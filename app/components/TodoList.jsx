import React from 'react';

import Todo from 'Todo';

class TodoList extends React.Component {
    render() {

        var renderTodos = () => {
            return this.props.todos.map((todo) => {
                return (
                    <Todo key={todo.id} {...todo} onToggle={this.props.onToggle} />
                )
            });
        }

        return(
            <div>
                {renderTodos()}
            </div>
        )
    }
}

export default TodoList;
