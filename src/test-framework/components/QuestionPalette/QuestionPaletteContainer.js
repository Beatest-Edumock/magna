import React, {Component} from 'react';
import {QuestionPaletteUI} from "./QuestionPaletteUI";

class QuestionPaletteContainer extends Component {

    render() {
        const questions = [1, 2, 390, 4, 7, 40, 4, 5, 4, 4, 6, 5, 6, 5, 5, 7, 540, 4, 5, 4, 4, 6, 5, 6, 5, 5];
        return (
            <QuestionPaletteUI questions={questions} />
        )
    }
}



export {QuestionPaletteContainer}