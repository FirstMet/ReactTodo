import React from 'react';
import {connect} from 'react-redux';

import Todo from 'Todo';

export class TodoList extends React.Component {
    render() {

        var renderTodos = () => {

            if(this.props.todos.length === 0) {
                return(
                    <p className="container__message">Nothing To Do</p>
                )
            }

            return this.props.todos.map((todo) => {
                return (
                    <Todo key={todo.id} {...todo} />
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

export default connect(
    (state) => {
        return {
            todos: state.todos
        };
    }
)(TodoList);
