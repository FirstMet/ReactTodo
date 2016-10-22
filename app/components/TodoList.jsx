import React from 'react';

import Todo from 'Todo';

class TodoList extends React.Component {
    render() {

        var renderTodos = () => {

            if(this.props.todos.length === 0) {
                return(
                    <p className="container__message">Nothing To Do</p>
                )
            }

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
