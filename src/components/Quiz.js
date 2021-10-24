import {Component} from "react";
import QuestionList from "./QuestionList";

class Quiz extends Component {
    state = { windowWidth: 0, windowHeight: 0 };
    
    // I give up im using classic js
    handleResize = () => {
        let rootEl = document.getElementById('root');
        let aBoxEl = document.getElementsByClassName('answers-box')[0];

        let elWidth = rootEl.clientWidth;
        let elHeight = rootEl.clientHeight;
        let winWidth = window.innerWidth;
        let winHeight = window.innerHeight;
        
        // Find window ratio
        let winRatio = winHeight / winWidth;

        var xRatio = 0;
        var yRatio = 0;
        var widthPerc = 100
        if(winRatio > 1.25) { // Mobile

            // Find scaling ratios. Add thinner width margins
            xRatio = winWidth / (elWidth + 50);
            yRatio = winHeight / (elHeight + 100);

            // Define flex style
            aBoxEl.style.height = "650px";
            aBoxEl.style.flexWrap = "nowrap";
            widthPerc = 120;

        } else { // Landscape

            // Find scaling ratios.
            xRatio = winWidth / (elWidth + 200);
            yRatio = winHeight / (elHeight + 100);

            // Define flex style
            aBoxEl.style.height = "325px";
            aBoxEl.style.flexWrap = "wrap";
            widthPerc = 80;
        }

        // Scale whole root based on ratios
        rootEl.style.cssText = `transform: translate(-50%, -50%) scale(${Math.min(xRatio, yRatio)}); width: ${widthPerc}%;`;
    };
    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

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
