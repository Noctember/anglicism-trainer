import React, {Component} from "react";
import shuffle from "./Shuffle";

class AnswerBox extends Component {
    render() {
        return (
            <div className="answers-element" tabIndex="-1" onClick={this.props.handleAnswerClick}>
                <p className="question-answer" tabIndex="0">
                    {this.props.answer}
                </p>
            </div>
        );
    }
}

class QuestionList extends Component {
    render() {
        return (
            <div className="answers-box-wrapper">
                <div className="answers-box-content">
                    {shuffle(this.props.question.choices).map((choice) => {
                        return (
                            <AnswerBox
                                key={choice}
                                answer={choice}
                                handleAnswerClick={this.props.handleAnswerClick(this.props.question, choice)}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default QuestionList;
