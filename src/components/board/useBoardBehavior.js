import { useState } from "react";

const useBoardBehavior = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isNext, setIsNext] = useState(false);

    const handleSquareClick = (clickedPosition) => {
        if(!squares[clickedPosition]) {
            setSquares((currentSquares) => {
                return currentSquares.map((squareValue, pos) => {
                    if(clickedPosition === pos) {
                        return isNext ? "O" : 'X';
                    }
    
                    return squareValue;
                });
            });
    
            setIsNext((currentValue) => !currentValue);
        }
    }

    return {
        squares,
        setSquares,
        handleSquareClick
    };
}

export default useBoardBehavior;