import {Component} from "react";
import QuestionList from "./QuestionList";

class Quiz extends Component {
    render() {
        return (
            <div className="app">
                <h1>Questionnaire de pratique sur les anglicismes</h1>
                <h3>Trouver lequel de ces expression est un anglicisme</h3>
                <div>
                    <QuestionList
                        question={this.props.questions[this.props.num]}
                        handleAnswerClick={this.props.handleAnswerClick}
                    />
                </div>
                <div className="success-bar-bg">
                    <div className="success-bar"/>
                </div>
                <p className="text-success">{this.props.score} / {this.props.num}</p>
                <div className="division"/>
            </div>
        );
    }
}

export default Quiz;
