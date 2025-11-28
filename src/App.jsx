import { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;

  if (all === 0) {
    return (
      <div>
        <h1>Statistics</h1>

        <p>No feedback</p>
      </div>
    );
  }
  const ave = all === 0 ? 0 : (good * 1 + neutral * -1) / all;
  const positive = all == 0 ? 0 : (good / all) * 100;

  return (
    <div>
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>ave {ave}</p>
      <p>positive {positive}</p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

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

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
