import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  return (
    <div>
       <Header />
       <ScoreList/> 
    </div>  
  )
}

/**
 * This component is the Header UI
 */
function Header() {
  return (
    <div>
      <h1>PLAYER SCORES</h1>
      <p>Here are the final points of the game</p>
    </div>
  )
}

/**
 * This component is the score list UI
 */
function ScoreList() {
  return (
    <dev>
      <hr />
      <PlayerScore name={'Marko'} score={'35'}/>
      <PlayerScore name={'Nasra'} score={'42'}/>
      <PlayerScore/>
    </dev>
  )
}

/**
 * This component shows one player points
 */
function PlayerScore({name= 'John Doe', score=0}){
  return(
    <div>
      <h3>Name:</h3>
      <p>{name}</p>
      <h3>Points:</h3>
      <p>{score}</p>
      <hr/>
    </div>
  )
}


export default App
