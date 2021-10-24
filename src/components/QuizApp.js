import {Component, Fragment} from "react";
import Quiz from './Quiz'
import {questions} from '../data/questions'
import shuffle from "./Shuffle";


const StatusMessage = [
    "Cliquez sur un des choix pour commencer.",
    "Bonne réponse. L'anglicisme est: ",
    "Mauvaise réponse. L'anglicisme est: "
];

class QuizApp extends Component {
    state = {
        ...this.getInitialState()
    }

    getInitialState() {
        return {
            questions: shuffle(questions),
            score: 0,
            num: 0,
            status: StatusMessage[0]
        };
    }

    handleClicks = (question, pressed) => (e) => {
        const {score, num} = this.state
        if (question.answer === pressed) {
            this.setState({
                score: score + 1,
                status: StatusMessage[1] + (' ' + question.answer).slice(1),
            })
        } else {
            this.setState({
                status: StatusMessage[2] + (' ' + question.answer).slice(1),
            })
        }
        this.setState({
            num: num + 1
        })
    }

    render() {
        const {questions, score, num, status} = this.state
        return (
            <Fragment>
                <Quiz
                    num={num}
                    questions={questions}
                    score={score}
                    status={status}
                    handleAnswerClick={this.handleClicks}
                />
            </Fragment>
        )
    }
}

export default QuizApp;
