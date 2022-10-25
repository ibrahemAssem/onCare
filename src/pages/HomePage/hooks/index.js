import { useState, useCallback, useEffect } from "react";

const useController = () => {
  const [activePlayer, setActivePlayer] = useState("X");
  const [countPlays, setCountPlays] = useState(0);
  const [markers, setMarkers] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const markPosition = useCallback(
    (position) => {
      if (!markers[position]) {
        let temp = [...markers];
        temp[position] = activePlayer;
        setMarkers(temp);
        if (activePlayer === "X") {
          //transfer chances to next player
          setActivePlayer("O");
          setCountPlays((old) => (old += 1));
        } else {
          setCountPlays((old) => (old += 1));
          setActivePlayer("X");
        }
      }
    },
    [activePlayer, markers, countPlays]
  );

  const resetMarkers = useCallback(() => {
    setMarkers([null, null, null, null, null, null, null, null, null]);
    setCountPlays(0);
    setActivePlayer("X");
  }, []);
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };
  useEffect(() => {
    const winner = calculateWinner(markers);
    console.log(countPlays);
    if (winner === "X") {
      alert("Player X Won!");
      resetMarkers();
    } else if (winner === "O") {
      alert("Player O Won!");
      resetMarkers();
    } else if (countPlays === 9) {
      alert("Draw, Good job Both of you!");
      resetMarkers();
    }
  }, [markers, countPlays]);

  return {
    activePlayer,
    markers,
    markPosition,
    resetMarkers,
  };
};
export default useController;
