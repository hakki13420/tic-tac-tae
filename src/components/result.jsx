

const Result = ({ winner, resetGame }) => {
    return (
        <div className="result">
            {!winner && <span class="draw">Draw</span>}
            {winner && <span class="winner">The winner is : {winner}</span>}
            <button className="btn" onClick={resetGame}> Reset the Game</button>
        </div>
    )
}


export default Result