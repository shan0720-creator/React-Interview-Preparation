import React from 'react';
import {render,screen,fireEvent} from '@testing-library/react';

import Counter from './Counter';

//test("Initial value of counter should be 0",()=>{
   // render(<Counter/>)
   // const counterEl = screen.getByText(0);  //getByTestId() // assigned the data test id so you can fetch by that // screen.getByTestId("cnt")
  //  expect(counterEl).toBeInTheDocument();
    // assertions are actually expecting out some situation to be true or false, You can derive assertions using expect() method
//})

//test("On Click, it should increment counter by 1",()=>{
   // render(<Counter/>);
   // const btnEl = screen.getByTestId("btn");
   // const counterEl = screen.getByTestId("cnt");
   // expect(counterEl.textContent).toBe("0");
   // fireEvent.click(btnEl);   //userEvent
   /// expect(counterEl.textContent).not.toBe("1"); //Non Matcher
   // expect(counterEl.tobeNull())

//})
// screen object gives you access to the virtual DOM when the component is rendered inside a test
// not can be added with most of the matchers to negate , You can use the toBeNull() or not.toBeNull() matchers to check the null or not null values
// In Test environment, there are different situations to check the value, check the element, the presence or absence of elements/variables

//test("Input should have 10 as initial value",()=>{
   // render(<Counter/>);
   // const inputEl = screen.getByTestId("input");
   // expect(inputEl).toBe("10");
//})

//test("Entering value in input works",()=>{
    //render(<Counter/>);
   // const inputEl = screen.getByTestId("input");
   // fireEvent.change(inputEl,{
     //   target:{
       //     value:11
        //}
    //})
    //expect(inputEl.value).toBe("11")
//})


// The use of snapshot

test("Snapshot test",()=>{
    expect(render(<Counter/>)).toMatchSnapshot();
})


//Press U to update the snapshot
//Snapshot testing is basically the output's snapshot has been taken and that is getting compared for subsequent changes