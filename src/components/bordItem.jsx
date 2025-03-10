import confetti from "canvas-confetti"

const BoardItem = ({ winner, setWinner, isSelected, children, boards, setBoards, index, tour, setTour, winKeys, setWinKeys }) => {

    const isDraw = (boards) => {
        return boards.every(el => el != null) && winner === null
    }


    const isWin = (boards, value) => {
        const filtredBoards = boards.map((el, ind) => el === value ? { index: ind, value } : null)
            .filter(el => el != null)
            .map(el => el.index)
        console.log(boards, filtredBoards, winKeys, winner)

        if (filtredBoards.includes(0) && filtredBoards.includes(1) && filtredBoards.includes(2)) {
            setWinKeys([0, 1, 2])
            setWinner(() => {
                return tour === "o" ? "x" : "o"
            })

            confetti()
        }
        else if (filtredBoards.includes(0) && filtredBoards.includes(3) && filtredBoards.includes(6)) {
            setWinKeys([0, 3, 6])
            setWinner(() => {
                return tour === "o" ? "x" : "o"
            })
            confetti()
        }
        else if (filtredBoards.includes(0) && filtredBoards.includes(4) && filtredBoards.includes(8)) {
            setWinKeys([0, 4, 8])
            setWinner(() => {
                return tour === "o" ? "x" : "o"
            })
            confetti()
        }
        else if (filtredBoards.includes(1) && filtredBoards.includes(4) && filtredBoards.includes(7)) {
            setWinKeys([1, 4, 7])
            setWinner(() => {
                return tour === "o" ? "x" : "o"
            })
            confetti()
        }
        else if (filtredBoards.includes(2) && filtredBoards.includes(5) && filtredBoards.includes(8)) {
            setWinKeys([2, 5, 8])
            setWinner(() => {
                return tour === "o" ? "x" : "o"
            })
            confetti()
        }
        else if (filtredBoards.includes(2) && filtredBoards.includes(4) && filtredBoards.includes(6)) {
            setWinKeys([2, 4, 6])
            setWinner(() => {
                return tour === "o" ? "x" : "o"
            })
            confetti()
        }
        else if (filtredBoards.includes(3) && filtredBoards.includes(4) && filtredBoards.includes(5)) {
            setWinKeys([3, 4, 5])
            setWinner(() => {
                return tour === "o" ? "x" : "o"
            })
            confetti()
        }
        else if (filtredBoards.includes(6) && filtredBoards.includes(7) && filtredBoards.includes(8)) {
            setWinKeys([6, 7, 8])
            setWinner(() => {
                return tour === "o" ? "x" : "o"
            })
            confetti()
        }
        else if (isDraw(boards)) setWinner(false)

    }

    const handlClickBoardItem = () => {
        if (boards[index]) return
        setBoards(prevBoards => {
            console.log("prev state", prevBoards)
            const newBoards = [...prevBoards]
            newBoards[index] = tour
            console.log("new state", newBoards)
            const nextTour = tour === "o" ? "x" : "o"
            isWin(newBoards, tour)
            setTour(nextTour)
            return newBoards
        })
    }


    return (
        <div
            className={isSelected
                ? 'selected board-item'
                : 'board-item'}
            style={{
                borderColor: winKeys.includes(index) ? "red" : "blue"
            }}
            onClick={() => handlClickBoardItem()}
        >
            {children}
        </div>
    )
}

export default BoardItem