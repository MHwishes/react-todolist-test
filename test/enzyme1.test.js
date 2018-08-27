import React from 'react';
import {shallow, mount, render} from 'enzyme';
import App from '../app/components/App';

describe('Enzyme Shallow', function() {
  it('App\'s title should be Todos', function() {
    let app = shallow(<App/>);
    expect(app.find('h1').text()).toEqual('Todos');
    expect(app).toMatchSnapshot();
  });
});

describe('Enzyme Render', function() {
  it('Todo item should not have todo-done class', function() {
    let app = render(<App/>);
    expect(app.find('.todo-done').length).toEqual(0);
    expect(app).toMatchSnapshot();
  });
});

describe('Enzyme Mount', function() {
  it('Delete Todo', function() {
    let app = mount(<App/>);
    let todoLength = app.find('li').length;
    app.find('button.delete').at(0).simulate('click');
    expect(app.find('li').length).toEqual(todoLength - 1);
    expect(app).toMatchSnapshot();
  });

  it('Turning a Todo item into Done', function() {
    let app = mount(<App/>);
    let todoItem = app.find('.todo-text').at(0);
    todoItem.simulate('click');
    expect(todoItem.hasClass('todo-done')).toEqual(true);
    expect(app).toMatchSnapshot();
  });

  it('Add a new Todo', function() {
    let app = mount(<App/>);
    let todoLength = app.find('li').length;
    let addInput = app.find('input').get(0);
    addInput.value = 'Todo Four';
    app.find('.add-button').simulate('click');
    expect(app.find('li').length).toEqual(todoLength + 1);
    expect(app).toMatchSnapshot();
  });
});
