import { React, useState } from 'react'
import { Band, SongList, Song} from './components'
import './App.css'
import songData from "../src/assets/songData";

function App() {
  const [songs, setSongs] = useState(songData);
  return (
    <>
      <Band /> 
      {/* <SongList songs={songs}/> */}
    </>
  )
}

export default App;
