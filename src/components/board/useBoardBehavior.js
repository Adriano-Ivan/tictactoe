import { useState } from "react";

const useBoardBehavior = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));

    const handleSquareClick = (clickedPosition) => {
        setSquares((currentSquares) => {
            return currentSquares.map((squareValue, pos) => {
                if(clickedPosition === pos) {
                    return 'X';
                }

                return squareValue;
            });
        });
    }

    return {
        squares,
        setSquares,
        handleSquareClick
    };
}

export default useBoardBehavior;