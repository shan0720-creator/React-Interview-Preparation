import React from 'react';
import {render,screen,fireEvent} from '@testing-library/react';
import Users from './Users';

// instead of writing <render/> multiple times You can use beforeEach(()=>{render(<Counter/>)}) You can also write afterEach() method also //write the repetitive code in these // Memory/container cleaning process- we put inside the afterEach() method
//test("Checking data retrieval in list item",async()=>{

   // window.fetch = jest.fn();
   // window.fetch.mockResolveValueOnce({            //creating a mock function to test an API
     //   json:async()=>{
   //         return[{email:'abc@test.com',username:'abctest'}]
     //   }
    //})
   // render(<Users/>)
   // const liEl = await screen.findAllByRole('listitem');
   // expect(liEl).not.toHaveLength(0);

//})


//why findAllByRole: - because we are expecting the findAllByRole.
//Whenever there is a change in the component, there will be a new save of all files and on all saving actions, this http call is made

//Mock gives a similar environment to the test where instead of actual calls, it will mock the returning values or situation, which will execute fast and server
//Apis are not called at all

//Advantage: - Mock the data/return the data and create an environment which allows you to stop unwanted API calls
