import {Component} from "react";

class Answer extends Component {
    render() {
        return (
            <li
                className="question-answer"
                tabIndex="0"
                onClick={this.props.handleAnswerClick}
            >
                {this.props.answer}
            </li>
        );
    }
}

class QuestionList extends Component {
    render() {
        return (
            <li className="question">
                <h2 className="question-title" tabIndex="0">
                    Quel est l'anglicisme?
                </h2>
                <ul className="question-answers" tabIndex="-1">
                    {this.props.question.choices.map((choice, index) => {
                        return (
                            <Answer
                                key={choice}
                                answer={choice}
                                handleAnswerClick={this.props.handleAnswerClick(this.props.question, choice)}
                            />
                        );
                    })}
                </ul>
            </li>
        );
    }
}

export default QuestionList;
