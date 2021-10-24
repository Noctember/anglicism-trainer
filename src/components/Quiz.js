import {Component} from "react";
import QuestionList from "./QuestionList";

class Quiz extends Component {
    state = { windowWidth: 0, windowHeight: 0 };

    render() {
        let percent = 100;
        if (this.props.num != 0) {
            percent = Math.round((this.props.score / this.props.num) * 100);
        }
        const barStyle = {
            minWidth: `${percent}%`
        };
        return (
            <div className="app">
                <h1>Questionnaire de pratique sur les anglicismes</h1>
                <h3>Trouvez lequel de ces expression est un anglicisme</h3>
                <div>
                    <QuestionList
                        question={this.props.questions[this.props.num]}
                        handleAnswerClick={this.props.handleAnswerClick}
                    />
                </div>
                <div className="success-bar-bg">
                    <div className="success-bar" style={barStyle}/>
                </div>
                <p className="text-success">{this.props.score} / {this.props.num}</p>
                <div className="division"/>
                <p class="text-correct-answer">{this.props.status}</p>
            </div>
        );
    }
}

export default Quiz;
