import BoardItem from "./bordItem"

const Board = ({ boards, setBoards, tour, setTour, winKeys, setWinKeys }) => {

    return (
        <div className='board'>
            {boards.map((el, index) => <BoardItem key={index}
                boards={boards}
                setBoards={setBoards}
                tour={tour}
                setTour={setTour}
                index={index}
                winKeys={winKeys}
                setWinKeys={setWinKeys}
            >
                {el ? el : ""}
            </BoardItem>)}
        </div>
    )
}


export default Board