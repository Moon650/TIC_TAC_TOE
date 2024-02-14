export default function Log({turn}) {
    return(
        <ol id="log">
            {turn .map(turns => <li key={`${turns.square.row}${turns.square.col}`}>
                {turns.player}selected {turns.square.row}, {turns.square.col}</li>)}
        </ol>
    )
}