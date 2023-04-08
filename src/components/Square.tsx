export enum TURN { X = '✖️', O = '⭕', NULL = '' }
import Peepa from './Peepa';
import Peepo from './Peepo';


function Square({ isSelected, children, updateBoard = () => {}, index = 0}: {
  isSelected?: boolean, children: TURN, updateBoard?: (index: number) => void, index?: number
}) {

  const handleClick = () => updateBoard(index);

  return (
      <div onClick={handleClick} className={`square ${isSelected ? "is-selected" : ""}`}>
        {children !== TURN.NULL ? children === TURN.X ? <Peepo/> : <Peepa/> : children}
      </div>
    )
}

export default Square;