import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
    const mins = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;

  useEffect(() => {
    const id = setInterval(function () {
      console.log("tock");
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return <div className="timer">{mins < 10 && '0'}{mins}:{mins < 10 && '0'}{seconds}</div>;
}

export default Timer;
