import {Component} from "react";
import QuestionList from "./QuestionList";

class Quiz extends Component {
    render() {
        return (
            <div className="app">
                <header>
                    Score: {this.props.score}
                </header>
                <div className="questions">
                    <QuestionList
                        question={this.props.questions[this.props.num]}
                        handleAnswerClick={this.props.handleAnswerClick}
                    />
                </div>
            </div>
        );
    }
}

export default Quiz;
