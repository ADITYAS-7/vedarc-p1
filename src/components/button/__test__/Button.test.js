import React from 'react'
import React-DOM from 'react-dom'
import Button1 from "../components/button/Button";
import "jest-dom/extend-expect";
import { render } from '@testing-library/react'
import {isTSAnyKeyword} from '@babel/types'


it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Button1></Button1>, div)
})

it("renders button correctly", ()=>{
    const{getByTestId} = render(<Button1 label="hello" ></Button1>)
    expect(getByTestId('button')).toHaveTextContent("hello")
})