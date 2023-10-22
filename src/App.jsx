import { useEffect } from 'react';
import Board from './components/board/Board';
import './styles.scss';
import useBoardBehavior from './useBoardBehavior';

function App() {
  const { handleSquareClick, squares, statusMessage } = useBoardBehavior();

  return (
    <div className="app">
      <h2>{statusMessage}</h2>
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
