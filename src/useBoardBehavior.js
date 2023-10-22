import { useEffect, useState } from "react";
import { calculateWinner } from "./winner";

const useBoardBehavior = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isNext, setIsNext] = useState(false);
    const nextPlayer = isNext ? 'X': '0';
    const winner = calculateWinner(squares);
    const statusMessage = winner ? `Winner is ${winner}` : `Next player is ${nextPlayer}`

    console.log(winner)

    const handleSquareClick = (clickedPosition) => {
        if(!squares[clickedPosition] && !winner) {
            setSquares((currentSquares) => {
                return currentSquares.map((squareValue, pos) => {
                    if(clickedPosition === pos) {
                        return isNext ? "X" : '0';
                    }
    
                    return squareValue;
                });
            });
    
            setIsNext((currentValue) => !currentValue);
        }
    }

    return {
        squares,
        handleSquareClick,
        statusMessage
    };
}

export default useBoardBehavior;