import React from 'react';
import {connect} from 'react-redux';

var actions = require('actions');

export class TodoSearch extends React.Component {

    render() {

        var {dispatch, showCompleted, searchText} = this.props;

        return(
            <div className="container__header">
                <div>
                    <input onChange={() => {
                        var searchText = this.refs.searchText.value;
                        dispatch(actions.setSearchText(searchText));
                    }} value={searchText} ref="searchText" type="search" placeholder="Search todos"/>
                </div>
                <div>
                    <label>
                        <input onChange={() => {
                            dispatch(actions.toggleShowCompleted());
                        }} checked={showCompleted} ref="showCompleted" type="checkbox"/>
                        Show completed todos
                    </label>
                </div>
            </div>
        )
    }
}

export default connect((state) => {
    return {
        showCompleted: state.showCompleted,
        searchText: state.searchText
    }
})(TodoSearch);
