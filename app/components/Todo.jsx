import React from 'react';
import moment from 'moment';

class Todo extends React.Component {
    render() {

        var todoClassName = this.props.completed ? 'todo todo-completed' : 'todo';

        var renderDate = () => {
            var message = 'Created ';
            var timestamp = this.props.createdAt;

            if(this.props.completed) {
                message = 'Completed ';
                timestamp = this.props.completedAt;
            }

            return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
        };

        return(
            <div className={todoClassName} onClick={() => {
                    this.props.onToggle(this.props.id);
                }}>
                <div>
                    <input type="checkbox" checked={this.props.completed} />
                </div>
                <div>
                    <p>{this.props.text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
            </div>
        )
    }
}

export default Todo;
