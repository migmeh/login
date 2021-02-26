import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
import React from "react";




describe('component app', ()=>{
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText("Welcome");
    expect(linkElement).toBeInTheDocument();
  });




  it('render', ()=>{
    const wrapper = <App />;
    expect(wrapper).toMatchSnapshot();
  });
});
