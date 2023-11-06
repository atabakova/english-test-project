import { useState } from 'react';
import './index.scss';

const questions = [
  {
    title: 'What is the plural form of "book"?',
    variants: ['Books', "Book's", 'Bookes'],
    correct: 0,
  },
  {
    title: 'Choose the correct sentence:',
    variants: [
      'He plays soccer yesterday.',
      'He is playing soccer now.',
      'He will be play soccer tomorrow.',
    ],
    correct: 1,
  },
  {
    title: 'How do you say "яблоко" in English?',
    variants: ['Banana', 'Apple', 'Orange'],
    correct: 1,
  },
  {
    title: 'What is the past participle of "drink"?',
    variants: ['Drinking', 'Drank', 'Drunk'],
    correct: 2,
  },
  {
    title: 'Which of the following is a preposition?',
    variants: ['Jump', 'In', 'Happy'],
    correct: 1,
  },
  {
    title: 'What is the superlative form of "good"?',
    variants: ['Best', 'Better', 'Goodest'],
    correct: 0,
  },
  {
    title: 'Complete the sentence: "I have _____ seen that movie before."',
    variants: ['Never', 'Always', 'Sometimes'],
    correct: 0,
  },
  {
    title: 'Choose the correct word: "She _____ to the store every day."',
    variants: ['Goes', 'Go', 'Went'],
    correct: 0,
  },
  {
    title:
      'Which tense is used for actions happening at the moment of speaking?',
    variants: ['Present Simple', 'Past Simple', 'Present Continuous'],
    correct: 2,
  },
  {
    title: 'What is the opposite of "happy"?',
    variants: ['Sad', 'Angry', 'Tired'],
    correct: 0,
  },
];

function Result({ correct }) {
  let level;
  if (correct <= 3) {
    level = 'Начинающий (beginning)';
  }
  if (correct >= 4 && correct <= 6) {
    level = 'Средний (medium)';
  }
  if (correct >= 7 && correct <= 10) {
    level = 'Продвинутый (advanced)';
  }
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        You guessed {correct} answers from {questions.length}
      </h2>
      <h3>
        Ваш уровень владения английским языком:<br></br> {level}
      </h3>
      <h4>Оставьте Ваш e-mail, и мы свяжемся с Вами!</h4>
      <input
        type="email"
        name="email"
        style={{
          fontSize: '20px',
          borderRadius: '5px',
          padding: '10px',
          border: 'none',
          backgroundColor: 'lightgray',
        }}
      ></input>
      <br></br>
      <a href="/">
        <button>Try again</button>
      </a>
    </div>
  );
}

function Game({ question, onClickVariant, step }) {
  const percentage = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const question = questions[step];
  const [correct, setCorrect] = useState(0);

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} />
      )}

      {/* <Result /> */}
    </div>
  );
}

export default App;
