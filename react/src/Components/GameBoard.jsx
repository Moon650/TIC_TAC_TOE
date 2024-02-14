// import { useState } from "react";

// const initialGameBoard = [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null],
// ] ;

export default function GameBoard({onSelectSquare, board}) {

    // let gameBoard = initialGameBoard;
    // for (const turns  of turn){
    //     const {square, player} = turns;
    //     const {row, col}= square;

    //     gameBoard [row] [col] = player;
    // }

    // const [ gameBoard, setGameBoard]= useState(initialGameBoard)

    // function handlingGameBoard (rowIndex, colIndex) {
    //     setGameBoard ((prevGameBoard) =>{
    //         const updatedBoard = [...prevGameBoard .map(innerArray => [...innerArray])]
    //         updatedBoard [rowIndex] [colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     })
    //     onSelectSquare();
    // }
//     return (
//         <ol id="game-board">
//             {gameBoard.map((row, rowIndex) => (
//     <li key={rowIndex}>
//         <ol>
//         (row.map(( playerSymbol, colIndex) => (
//             <li key={colIndex}>
//                 {/* <button onClick={() => handlingGameBoard (rowIndex, colIndex)}>{playerSymbol}</button> */}
//                 <button
//                  onClick={ () => onSelectSquare(rowIndex, colIndex)} 
//                 disabled={playerSymbol !== null}
//                 >
//                 {playerSymbol}
//                 </button>

//                 </li>
//                 ))}
//             </ol>
//             </li>
//             ))}
//         </ol>
//     )
// }

return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}