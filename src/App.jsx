import React, { useState, useEffect } from 'react'
import Quiz from './Quiz'
import Result from './Result'

const App = () => {
  const [questions, setQuestions] = useState([])
  const [userAnswers, setUserAnswers] = useState([])
  const [showResults, setShowResults] = useState(false)

  const fetchQuestions = async () => {
    const res = await fetch('https://opentdb.com/api.php?amount=5')
    const data = await res.json()
    const formatted = data.results.map((q) => ({
      question: decodeURIComponent(q.question),
      correct: decodeURIComponent(q.correct_answer),
      answers: shuffle([
        ...q.incorrect_answers.map((a) => decodeURIComponent(a)),
        decodeURIComponent(q.correct_answer)
      ])
    }))
    setQuestions(formatted)
    setUserAnswers([])
    setShowResults(false)
  }

  useEffect(() => {
    fetchQuestions()
  }, [])

  const handleAnswer = (questionIndex, answer) => {
    const updated = [...userAnswers]
    updated[questionIndex] = answer
    setUserAnswers(updated)
  }

  const handleSubmit = () => {
    if (userAnswers.length === questions.length) {
      setShowResults(true)
    } else {
      alert("Please answer all questions!")
    }
  }

  const handleRestart = () => {
    fetchQuestions()
  }

  return (
    <div className="app">
      <h1>Trivia Quiz</h1>
      {!showResults ? (
        <Quiz 
          questions={questions} 
          userAnswers={userAnswers} 
          onAnswer={handleAnswer}
          onSubmit={handleSubmit}
        />
      ) : (
        <Result 
          questions={questions} 
          userAnswers={userAnswers}
          onRestart={handleRestart}
        />
      )}
    </div>
  )
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5)
}

export default App
