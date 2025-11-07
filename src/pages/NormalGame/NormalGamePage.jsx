import { SudokuProvider } from "../../context/SudokuContext";
import SudokuGame from "../../components/SudokuGame/SudokuGame";

export const NormalGamePage = () => {
  return (
    <SudokuProvider>
      <SudokuGame mode="normal" title="Sudoku" difficulty="Normal" />
    </SudokuProvider>
  );
};
