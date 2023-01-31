import React from "react"
import Data from "./MemesData.js"

export default function Meme() {
  const [allMemeImages, setAllMemeImages] = React.useState([])

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  })

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMemeImages(data.data.memes))
  }, [])

  function handleInp(e) {
    e.preventDefault()
    setMeme((prevInp) => {
      return {
        ...prevInp,
        [e.target.name]: e.target.value,
      }
    })
  }

  function getMemeImage(e) {
    e.preventDefault()
    let url =
      allMemeImages[Math.floor(Math.random() * allMemeImages.length)].url
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
          <input
            onChange={handleInp}
            name="topText"
            className="line line1"
            type="text"
            value={meme.topText}
          />
          <input
            onChange={handleInp}
            name="bottomText"
            className="line line2"
            type="text"
            value={meme.bottomText}
          />
        </div>
        <div className="btn-container">
          <button onClick={getMemeImage} type="submit">
            Get a new meme image
          </button>
        </div>
      </form>
      <div className="container">
        <h2 className="first-h2">{meme.topText}</h2>
        <div className="image-container">
          <img src={meme.randomImage} />
        </div>
        <h2 className="last-h2">{meme.bottomText}</h2>
      </div>
    </div>
  )
}
