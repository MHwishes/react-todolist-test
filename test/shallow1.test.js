import React from 'react';
import TestUtils from 'react-addons-test-utils';
import App from '../app/components/App';

function shallowRender(Component) {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Component/>);
  return renderer.getRenderOutput();
  // 返回浅渲染的虚拟DOM对象
}

describe('Shallow Rendering', function() {
  it('App\'s title should be Todos', function() {
    const app = shallowRender(App);
    // component's shallow rendering has props.children
    // 每一个虚拟DOM对象都有props.children属性，它包含一个数组，里面是所有的子组件。
    expect(app.props.children[0].type).toEqual('h1');
    expect(app.props.children[0].props.children).toEqual('Todos');
  });
});
