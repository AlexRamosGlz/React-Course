import Options from "./components/Options";
import { useQuiz } from "./context/QuizContext";

function Question() {
  const { dispatch, answer, questions, index } = useQuiz();

  const question = questions[index];

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
