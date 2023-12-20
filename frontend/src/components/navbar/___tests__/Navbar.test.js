import preview from "jest-preview"
import Navbar from "../Navbar"
import render from "react"

describe("Navbar", ()=> {
    it("renders a menu toggle", ()=> {
        render(<Navbar />)

        preview.debug()
        
    })
})