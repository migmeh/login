import React, { Component } from "react";
import { shallow } from 'enzyme';
import BoardUser from "./board-user.component";


describe('BoardUser component',()=>{

    it('BoardUser', ()=>{
        const wrapper = <BoardUser/>;
        expect(wrapper).toMatchSnapshot();
    });


    it('BoardUser shallow', ()=>{
        const wrapper = shallow(<BoardUser/>);
        expect(wrapper).toMatchSnapshot();
    });

});

