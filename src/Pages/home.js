import Quiz from '../Components/Quiz'
import { useState } from 'react';

export default function Home() {
    const [quizLoaded, setQuizLoaded] = useState(false);
    const handleQuizLoad = () => {
        setQuizLoaded(true);
    };

    return (
        <div className="container">
            <h1>Quiz!</h1>
            <h3>Do you dare to test your knowledge?</h3>
            
            {quizLoaded ? ( <Quiz /> ) : ( <button onClick={handleQuizLoad}>Lets Go!</button>)}
        </div>
    )
}