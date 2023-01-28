import React from "react"
import logo from "./logo2.png"

export default function Nav() {
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} />
        <h1 className="logo-text">Meme Generator</h1>
      </div>
      <div>
        <h2>React Course - Project 3</h2>
      </div>
    </div>
  )
}
