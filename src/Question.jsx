import React from 'react'

const Question = ({ index, question, selected, onAnswer }) => {
  return (
    <div className="question">
      <h3>{index + 1}. {question.question}</h3>
      {question.answers.map((answer, i) => (
        <div key={i}>
          <label>
            <input
              type="radio"
              name={`q-${index}`}
              value={answer}
              checked={selected === answer}
              onChange={() => onAnswer(index, answer)}
            />
            {answer}
          </label>
        </div>
      ))}
    </div>
  )
}

export default Question
