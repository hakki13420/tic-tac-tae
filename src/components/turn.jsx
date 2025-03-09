import BoardItem from "./bordItem"

const Turn = ({ tour, setTour, winKeys, setBoards }) => {
    return (
        <div className='turn'>
            <BoardItem winKeys={winKeys} boards={[]} setTour={setTour} setBoards={setBoards} isSelected={tour === "o"}>o</BoardItem>
            <BoardItem winKeys={winKeys} boards={[]} setTour={setTour} setBoards={setBoards} isSelected={tour === "x"}>x</BoardItem>
        </div>
    )
}


export default Turn