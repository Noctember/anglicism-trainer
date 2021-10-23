import {Component, Fragment} from "react";
import Quiz from './Quiz'
import {questions} from '../data/questions'

class QuizApp extends Component {
    state = {
        ...this.getInitialState()
    }

    getInitialState() {
        return {
            questions: this.shuffle(questions),
            score: 0,
            num: 0
        };
    }

    shuffle(arr) {
        return arr.sort((a, b) => Math.random() < .5 ? 1 : -1);
    }

    handleClicks = (question, pressed) => (e) => {
        const { score, num} = this.state
        if (question.answer === pressed) {
            this.setState({
                score: score + 1,
                num: num + 1
            })
        } else {

        }
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
