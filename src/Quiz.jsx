import React from 'react'
import Question from './Question'

const Quiz = ({ questions, userAnswers, onAnswer, onSubmit }) => {
  return (
    <div>
      {questions.map((q, idx) => (
        <Question 
          key={idx} 
          index={idx}
          question={q} 
          selected={userAnswers[idx]} 
          onAnswer={onAnswer} 
        />
      ))}
      <button onClick={onSubmit}>Submit Quiz</button>
    </div>
  )
}

export default Quiz
