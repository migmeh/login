import React, { Component } from "react";
import { shallow } from 'enzyme';
import Login from "./login.component";


describe('login component',()=>{

    it('login', ()=>{
        const wrapper = <Login/>;
        expect(wrapper).toMatchSnapshot();
    });


    it('shallow login', ()=>{
        const wrapper = shallow(<Login/>);
        expect(wrapper).toMatchSnapshot();
    });



});

