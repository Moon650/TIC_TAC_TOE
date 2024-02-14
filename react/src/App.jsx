import { useState } from 'react'
import Player from './Components/Player'
import GameBoard from './Components/GameBoard'
import Log from './Components/Log'
import GameOver from './Components/GameOver'
import { WINNING_COMBINATIONS } from './WINNING_COMBINATION'


const PLAYERS = {
  X: 'player 1',
  O: 'player 2'
}
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
] ;

function driveActivePlayer(gameTurns) {
  let currentPlayer = 'X';
    
    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
      currentPlayer = 'O'
    }

    return currentPlayer;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map(array =>[...array])];



  for (const turns  of gameTurns){
      const {square, player} = turns;
      const {row, col}= square;
  
      gameBoard [row] [col] = player;
  }
  return gameBoard
}

function deriveWinner(gameBoard, player) {

  let Winner


  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row] [combination[0] .column]
    const secondSquareSymbol = gameBoard[combination[1].row] [combination[1] .column]
    const thirdSquareSymbol = gameBoard[combination[2].row] [combination[2] .column]
  
    if (firstSquareSymbol && firstSquareSymbol === 
      secondSquareSymbol && firstSquareSymbol
       === thirdSquareSymbol){
        Winner =player[firstSquareSymbol]
       }
  }

  return Winner
}

function App() {
  const [player, setPlayer] = useState(PLAYERS)
  const [gameTurns, setGameTurns]  = useState([])
  // const [hasWinner, setHasWinner]  = useState(false)

// const [activePlayer, setActivePlayer] = useState('X')


const activePlayer = driveActivePlayer(gameTurns)

const gameBoard = deriveGameBoard(gameTurns)

const Winner = deriveWinner(gameBoard, player);
const hasDraw = gameTurns.length === 9 && !Winner;
function handleSelectSquare(rowIndex, colIndex) {
  // setActivePlayer ((curActivePlayer => curActivePlayer === 'X' ? 'O' : 'X'))
  setGameTurns( prevTurns => {

    const currentPlayer = driveActivePlayer(prevTurns)
    
    const updatedTurns = [{ square: { row: rowIndex, col: colIndex}, player: currentPlayer },
       ...prevTurns]

       return updatedTurns
  })
}

function handleRematch() {
  setGameTurns([]);
}
function handlePlayerNameChange(symbol, newName) {
  setPlayer(prePlayer => {
    return{
      ...prePlayer,
      [symbol]: newName
    }
  })
}
  return (
    <main>
      <div id="game-container">
        <ol id='players' className='highlight-player'>
         <Player initialName= {PLAYERS.X} 
         symbol="X"
          isActive={activePlayer === 'X'}
          onChangeName={handlePlayerNameChange}
          />
         <Player initialName={PLAYERS.O} 
         symbol="O"
          isActive={activePlayer === 'O'}
          onChangeName = {handlePlayerNameChange}
          />
        </ol>
        {(Winner || hasDraw) &&(
        <GameOver winner={Winner}  onRestart={handleRematch} />
        )}

        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} /> 
      </div>
      < Log turn={gameTurns} />
    </main>
  )
}

export default App
