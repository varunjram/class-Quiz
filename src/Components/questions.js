import React from "react";
import {QuizData} from "../data/quiz"



class Questions extends React.Component{

    state={
        selectedOption: null,
        score: null,
        currentQuestion: 0,
        test: "Awesome"
    }

    optionSelected = (e) => {
        this.setState({selectedOption: e.target.textContent})        
    }

    handelNext = () => {
        let _selectedOpt = this.state.selectedOption;
        let _ans = QuizData[this.state.currentQuestion].answer;

        // console.log(_selectedOpt,_ans)
        if(_selectedOpt === _ans ){
            // let newScore = this.state.score +1
            this.setState({score: this.state.score + 1})
        }


        this.setState({currentQuestion: this.state.currentQuestion + 1})


    render(){
        console.log(this.state.score);
        return(
            <div className="quiz">
                <h2 className="quiz__question" >{QuizData[this.state.currentQuestion].question}</h2>
                <div className="quiz__mcq-wrapper" >
                    {QuizData[this.state.currentQuestion].options.map((option , index) => {
                        return(
                          <p key={index} onClick={(e) => {this.optionSelected(e)}}>{option}</p>
                        )
                    })}
                </div>
                <button onClick={this.handelNext }>NEXT</button>
            </div>
        )
    }
}


export default Questions