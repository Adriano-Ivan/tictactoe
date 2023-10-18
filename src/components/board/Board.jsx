import Square from '../Square';
import useBoardBehavior from './useBoardBehavior';

const Board = () => {
  const {squares, handleSquareClick} = useBoardBehavior();

  const renderSquare = (position) => {
    return <Square 
                value={squares[position]} 
                onSquareClick={( ) => {
                    handleSquareClick(position);
                }}
            />;
  }

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
