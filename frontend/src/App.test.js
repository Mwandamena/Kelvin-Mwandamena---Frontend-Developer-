import {debug, render } from 'jest-preview'
import React from 'react'
import App from "./App"


describe("App", ()=> {
    it("Should show the behave correctly", ()=> {
        render(<App />)
        debug()
    })
})