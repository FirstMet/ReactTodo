import React from 'react';

class Todo extends React.Component {
    render() {

        return(
            <div onClick={() => {
                    this.props.onToggle(this.props.id);
                }}>
                <input type="checkbox" checked={this.props.completed} />
                {this.props.text}
            </div>
        )
    }
}

export default Todo;
