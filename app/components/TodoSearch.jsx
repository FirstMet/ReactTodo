import React from 'react';

class TodoSearch extends React.Component {

    handleSearch() {
        var showCompleted = this.refs.showCompleted.checked;
        var searchText = this.refs.searchText.value;

        this.props.onSearch(showCompleted, searchText);
    }

    render() {
        return(
            <div>
                <div>
                    <input onChange={this.handleSearch.bind(this)} ref="searchText" type="search" placeholder="Search todos"/>
                </div>
                <div>
                    <label>
                        <input onChange={this.handleSearch.bind(this)} ref="showCompleted" type="checkbox"/>
                        Show completed todos
                    </label>
                </div>
            </div>
        )
    }
}

export default TodoSearch;
