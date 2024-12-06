import { useQuiz } from "../context/QuizContext";

function FinishedScreen({ maxPossiblePoints }) {
  const { points, highscore, dispatch } = useQuiz();

  const percentage = Math.ceil((points / maxPossiblePoints) * 100);

  return (
    <>
      <p className="result">
        You score <strong>{points}</strong> out of {maxPossiblePoints} (
        {percentage}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishedScreen;
