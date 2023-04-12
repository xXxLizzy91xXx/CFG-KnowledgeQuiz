import { useState } from 'react';
import './Quiz.css'

export default function Quiz() {
    const questions = [
        {
            question: "What was the last queens name?",
            options: [
                { answer: 'Victoria', isCorrect: false },
                { answer: 'Mary', isCorrect: false },
                { answer: 'Juliet', isCorrect: false },
                { answer: 'Elizabeth', isCorrect: true }
            ],
        },
        {
            question: "What colour is the sky?",
            options: [
                { answer: 'Purple', isCorrect: false },
                { answer: 'Blue', isCorrect: true },
                { answer: 'Yellow', isCorrect: false },
                { answer: 'Black', isCorrect: false }
            ],
        },
        {
            question: "If I was Mark Zuckerberg, what social media site do I run?",
            options: [
                { answer: 'Instagram', isCorrect: false },
                { answer: 'Discord', isCorrect: false },
                { answer: 'Facebook', isCorrect: true },
                { answer: 'SnapChat', isCorrect: false }
            ],
        },
        {
            question: "How many Harry Potter books are there?",
            options: [
                { answer: '3', isCorrect: false },
                { answer: '8', isCorrect: false },
                { answer: '7', isCorrect: true },
                { answer: '2', isCorrect: false }
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

    const handleResetQuiz = () => {
        setCurrentQuestion(0);
        setShowScore(false);
        setScore(0);
    };

    return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
                    <br></br>
                    <button onClick={handleResetQuiz}>Reset Quiz</button>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question'>{questions[currentQuestion].question}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].options.map((option) => (
							<button onClick={() => handleAnswerOptionClick(option.isCorrect)}>{option.answer}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}