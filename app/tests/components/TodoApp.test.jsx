import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import TodoApp from 'TodoApp';

describe('TodoApp', () => {

    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to the todos state on handleAddTodo', () => {
        var todoText = 'test text';
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

        todoApp.setState({todos: []});
        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);
        expect(todoApp.state.todos[0].createdAt).toBeA('number');
    });

    it('should toggle completed value when handleToogle called', () => {
        var todoData = {
            id: 11,
            text: 'Test features',
            completed: false,
            createdAt: 0,
            completedAt: undefined
        };

        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({
            todos: [todoData]
        });

        expect(todoApp.state.todos[0].completed).toBe(false);
        todoApp.handleToogle(11);
        expect(todoApp.state.todos[0].completed).toBe(true);
        expect(todoApp.state.todos[0].completedAt).toBeA('number');

    });

    it('should toggle todo from completed to incompleteds', () => {
        var todoData = {
            id: 11,
            text: 'Test features',
            completed: true,
            createdAt: 0,
            completedAt: 1
        };

        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({
            todos: [todoData]
        });

        expect(todoApp.state.todos[0].completed).toBe(true);
        todoApp.handleToogle(11);
        expect(todoApp.state.todos[0].completed).toBe(false);
        expect(todoApp.state.todos[0].completedAt).toNotExist();

    });

});
