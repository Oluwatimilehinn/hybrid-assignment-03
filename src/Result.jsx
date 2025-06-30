import React from 'react'

const Result = ({ questions, userAnswers, onRestart }) => {
  const score = questions.reduce((acc, q, i) => {
    return acc + (userAnswers[i] === q.correct ? 1 : 0)
  }, 0)

  return (
    <div className="results">
      <h2>You scored {score} out of {questions.length}</h2>
      {questions.map((q, i) => {
        const userAnswer = userAnswers[i]
        const isCorrect = userAnswer === q.correct
        return (
          <div key={i} className="result-question">
            <p><strong>Q{i + 1}: {q.question}</strong></p>
            <p>
              Your answer:{' '}
              <span className={isCorrect ? 'correct' : 'incorrect'}>
                {userAnswer}
              </span>
            </p>
            {!isCorrect && (
              <p>
                Correct answer:{' '}
                <span className="correct">{q.correct}</span>
              </p>
            )}
            <hr />
          </div>
        )
      })}
      <button onClick={onRestart}>Take Another Quiz</button>
    </div>
  )
}

export default Result
