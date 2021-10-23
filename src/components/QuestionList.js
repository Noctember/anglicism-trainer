import {Component} from "react";
import shuffle from "./Shuffle";

class Answer extends Component {
    render() {
        return (
            <p
                className="question-answer"
                tabIndex="0"
                onClick={this.props.handleAnswerClick}
            >
                {this.props.answer}
            </p>
        );
    }
}

class QuestionList extends Component {
    render() {
        return (
            <div className="answers-box">
                {shuffle(this.props.question.choices).map((choice) => {
                    return (
                        <div className="answers-element" tabIndex="-1">
                            <Answer
                                key={choice}
                                answer={choice}
                                handleAnswerClick={this.props.handleAnswerClick(this.props.question, choice)}
                            />
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default QuestionList;
