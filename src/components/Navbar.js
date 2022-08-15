import React from "react"
import reactlogo from "/Users/maro/project/src/images/logo192.png"

export default function Navbar(){
    return (
    <nav>
        <img 
        src={reactlogo}
        atl="React logo"
        className="nav--icon"
        />
        <h3 className="nav--logo_text"> ReactFacts</h3>
        <h4 className="nav--title">First React project</h4>
     </nav>
    )
}