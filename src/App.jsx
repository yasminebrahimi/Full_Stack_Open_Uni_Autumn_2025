import { useState } from "react";
import Statistic from "./components/Statistic";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const ave = all === 0 ? 0 : (good * 1 + neutral * -1) / all;
  const positive = all == 0 ? 0 : (good / all) * 100;

  return (
    <div>
      <h1>Give Feedback</h1>

      <button type="button" onClick={() => setGood(good + 1)}>
        Good
      </button>
      <button type="button" onClick={() => setNeutral(neutral + 1)}>
        natural
      </button>
      <button type="button" onClick={() => setBad(bad + 1)}>
        Bad
      </button>

      <h1>Statistics</h1>

      {all == 0 ? (
        <p> Mo Feedback</p>
      ) : (
        <div>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={all} />
          <Statistic text="ave" value={ave} />
          <Statistic text="positive" value={positive} />
        </div>
      )}
    </div>
  );
};

export default App;
