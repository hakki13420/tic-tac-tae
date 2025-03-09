import { useEffect, useState } from "react"

const BoardItem = ({ isSelected, children, boards, setBoards, index, tour, setTour, winKeys, setWinKeys }) => {
    const [selected, setSelected] = useState(false)
    useEffect(() => {
        selected && setBoards(boards => boards.map((el, key) => {
            return key === index ? tour === "o" ? "x" : "o" : el
        }))
        selected && isWin(tour === "o" ? "x" : "o")
    }, [selected])

    const isWin = (value) => {
        const filtredBoards = boards.map((el, ind) => el === value ? { index: ind, value } : null)
            .filter(el => el != null)
            .map(el => el.index)

        if (filtredBoards.includes(0) && filtredBoards.includes(1) && filtredBoards.includes(2)) setWinKeys([0, 1, 2])
        else if (filtredBoards.includes(0) && filtredBoards.includes(3) && filtredBoards.includes(6)) setWinKeys([0, 3, 6])
        else if (filtredBoards.includes(0) && filtredBoards.includes(4) && filtredBoards.includes(8)) setWinKeys([0, 4, 8])
        else if (filtredBoards.includes(1) && filtredBoards.includes(4) && filtredBoards.includes(7)) setWinKeys([1, 4, 7])
        else if (filtredBoards.includes(2) && filtredBoards.includes(5) && filtredBoards.includes(8)) setWinKeys([2, 5, 8])
        else if (filtredBoards.includes(2) && filtredBoards.includes(4) && filtredBoards.includes(6)) setWinKeys([2, 4, 6])
        else if (filtredBoards.includes(3) && filtredBoards.includes(4) && filtredBoards.includes(5)) setWinKeys([3, 4, 5])
        else if (filtredBoards.includes(6) && filtredBoards.includes(7) && filtredBoards.includes(8)) setWinKeys([6, 7, 8])
    }

    const handlClickBoardItem = () => {
        if (boards[index]) return
        setBoards(boards => boards.map((el, key) => {
            return key === index ? tour : el
        }))
        const nextTour = tour === "o" ? "x" : "o"
        isWin(tour)
        setTour(nextTour)
        setSelected(true)
    }


    return (
        <div
            className={isSelected
                ? 'selected board-item'
                : 'board-item'}
            style={{
                borderColor: winKeys.includes(index) ? "red" : "blue"
            }}
            onClick={() => handlClickBoardItem(boards, setBoards, index, tour, setTour, winKeys, setWinKeys)}
        >
            {children}
        </div>
    )
}

export default BoardItem