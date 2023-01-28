import React from "react"
import Data from "./MemesData.js"

export default function Meme() {
  const [allMemeImages, setAllMemeImages] = React.useState(Data)

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  })

  function getMemeImage(e) {
    let allMemes = Data.data.memes
    e.preventDefault()
    let url = Data.data.memes[Math.floor(Math.random() * allMemes.length)].url
    setMeme((prevData) => {
      return {
        ...prevData,
        randomImage: url,
      }
    })
  }

  return (
    <div className="meme-container">
      <form className="form">
        <div className="meme">
          <input className="line line1" type="text" />
          <input className="line line2" type="text" />
        </div>
        <div className="btn-container">
          <button onClick={getMemeImage} type="submit">
            Get a new meme image
          </button>
        </div>
      </form>
      <div className="image-container">
        <img src={meme.randomImage} />
      </div>
    </div>
  )
}
