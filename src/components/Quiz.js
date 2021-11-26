import React, {Component} from "react";
import QuestionList from "./QuestionList";

class Quiz extends Component {
    state = { windowWidth: 0, windowHeight: 0 };

    render() {
        let percent = 0;
        if (this.props.num != 0) {
            percent = Math.round((this.props.score / this.props.num) * 100);
        }
        const barStyle = {
            minWidth: `${percent}%`
        };
        return (
            <div className="app">
                <h1>Questionnaire de pratique sur les anglicismes</h1>
                <h3>Choisisez une expression qui n'est pas un anglicisme</h3>
                <div>
                    <QuestionList
                        question={this.props.questions[this.props.num]}
                        handleAnswerClick={this.props.handleAnswerClick}
                    />
                </div>
                <div className="success-bar-bg">
                    <div className="success-bar" style={barStyle}/>
                </div>
                <p className="text-success">{percent}% ― {this.props.score} / {this.props.num}</p>
                <div className="division"/>
                <p class="text-correct-answer">{this.props.status} ({this.props.num} / 545 questions)</p>
            </div>
        );
    }
}

export default Quiz;
