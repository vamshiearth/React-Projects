import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("₹ 0");

  const data = [
    {
      id: 1,
      question: "Which one is the tallest tower in the world?",
      answers: [
        {
          text: "Tokyo Skytree, Japan",
          correct: true,
        },
        {
          text: "CN Tower, Canada",
          correct: false,
        },
        {
          text: "Canton Tower, China",
          correct: false,
        },
        {
          text: "KL Tower, Malaysia",
          correct: false,
        },
      ],
    },
   
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },

    {
      id: 4,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Which continent has the highest number of countries?",
      answers: [
        {
          text: "Asia",
          correct: false,
        },
        {
          text: "Europe",
          correct: false,
        },
        {
          text: "North America",
          correct: false,
        },
        {
          text: "Africa",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "What Is The Resolution Of The Human Eye?",
      answers: [
        {
          text: "476 Megapixels",
          correct: false,
        },
        {
          text: "876 Megapixels",
          correct: false,
        },
        {
          text: "676 Megapixels",
          correct: false,
        },
        {
          text: "576 Megapixels",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "What color does yellow and green make?",
      answers: [
        {
          text: "Tangerine",
          correct: false,
        },
        {
          text: "Maroon",
          correct: false,
        },
        {
          text: "Ocean mist",
          correct: false,
        },
        {
          text: "Lime",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "MS-Word is an example of _____",
      answers: [
        {
          text: " A processing device",
          correct: false,
        },
        {
          text: "Application software",
          correct: true,
          
        },
        {
          text: "An input device",
          correct: false,
        },
        {
          text: "An operating system",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Patanjali is well known for the compilation of ___",
      answers: [
        {
          text: "Yoga Sutra",
          correct: true,
        },
        {
          text: "Panchatantra",
          correct: false,
          
        },
        {
          text: "Brahma Sutra",
          correct: false,
        },
        {
          text: "Ayurveda",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Tsunamis are not caused by___",
      answers: [
        {
          text: "Undersea landslides",
          correct: false,
        },
        {
          text: "Earthquakes",
          correct: false,
          
        },
        {
          text: "Hurricanes",
          correct: true,
        },
        {
          text: "Volcanic eruptions",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "For the Olympics and World Tournaments, the dimensions of basketball court are",
      answers: [
        {
          text: "27 m x 16 m",
          correct: false,
        },
        {
          text: "28 m x 15 m",
          correct: true,
          
        },
        {
          text: "26 m x 14 m",
          correct: false,
        },
        {
          text: "28 m x 16 m",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "The United Nations Organization has its Headquarters at__?",
      answers: [
        {
          text: "Bali",
          correct: false,
        },
        {
          text: "Hague",
          correct: false,
          
        },
        {
          text: "New York, USA",
          correct: true,
        },
        {
          text: "Washington DC",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "This scientist is well known for his theory of relativity. Who is he?",
      answers: [
        {
          text: "Thomas Alva Edison",
          correct: false,
        },
        {
          text: "Albert Einstein",
          correct: true,
          
        },
        {
          text: "Marconi",
          correct: false,
        },
        {
          text: "James Watt",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Which organ of the human body does the Alzheimer's disease affect?",
      answers: [
        {
          text: "Ear",
          correct: false,
        },
        {
          text: "Brain",
          correct: true,
          
        },
        {
          text: "Eye",
          correct: false,
        },
        {
          text: "Stomach",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "PSLV-C37 carries two Indian satellites along with other 101 International satellites in a single flight. What was the name of that two Indian satellites?",
      answers: [
        {
          text: "Cartosat-2 and Cartosat-3",
          correct: false,
        },
        {
          text: "Cartosat-2 and INS-1A",
          correct: false,
          
        },
        {
          text: "INS-1A and INS-1B",
          correct: true,
        },
        {
          text: "Cartosat-3 and INS-1B",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "₹ 1000" },
        { id: 2, amount: "₹ 2000" },
        { id: 3, amount: "₹ 3000" },
        { id: 4, amount: "₹ 5000" },
        { id: 5, amount: "₹ 10,000" },
        { id: 6, amount: "₹ 20,000" },
        { id: 7, amount: "₹ 40,000" },
        { id: 8, amount: "₹ 80,000" },
        { id: 9, amount: "₹ 1,60,000" },
        { id: 10, amount: "₹ 3,20,000" },
        { id: 11, amount: "₹ 6,40,000" },
        { id: 12, amount: "₹ 12,50,000" },
        { id: 13, amount: "₹ 25,00,000" },
        { id: 14, amount: "₹ 50,00,000" },
        { id: 15, amount: "₹ 1,00,000,000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;