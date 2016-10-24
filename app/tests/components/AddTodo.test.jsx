import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import {AddTodo} from 'AddTodo';

describe('AddTodo', () => {

    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should dispatch ADD_TODO when valid todo text', () => {
        var action = {
            type: 'ADD_TODO',
            text: 'Check Mail'
        }
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = 'Check Mail';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should not dispatch ADD_TODO when invalid todo text', () => {
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = '';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });

});
