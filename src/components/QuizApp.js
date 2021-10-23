import {Component, Fragment} from "react";
import Quiz from './Quiz'
import {questions} from '../data/questions'
import shuffle from "./Shuffle";

class QuizApp extends Component {
    state = {
        ...this.getInitialState()
    }

    getInitialState() {
        return {
            questions: shuffle(questions),
            score: 0,
            num: 0
        };
    }

    handleClicks = (question, pressed) => (e) => {
        const {score, num} = this.state
        if (question.answer === pressed) {
            this.setState({
                score: score + 1,
            })
            // TODO: Some effect
        } else {
            // TODO: Some effect
        }
        this.setState({
            num: num + 1
        })
    }

    render() {
        const {questions, score, num} = this.state
        return (
            <Fragment>
                <Quiz
                    num={num}
                    questions={questions}
                    score={score}
                    handleAnswerClick={this.handleClicks}
                />
            </Fragment>
        )
    }
}

export default QuizApp;
