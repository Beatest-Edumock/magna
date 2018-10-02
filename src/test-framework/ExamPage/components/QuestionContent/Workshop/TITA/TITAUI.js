import React from 'react';
import {TITAKeyPad} from "./TITAKeyPad";


class TITAUI extends React.Component {


    titaKeyPad() {
        return (

            <TITAKeyPad localValue={this.props.localValue}
                        tita_choice={this.props.tita_choice}
                        handleValueUpdate={this.props.handleValueUpdate}
                        handleSubmit={this.props.handleSubmit}
                        handleBackSpace={this.props.handleBackSpace}
                        isComplete={this.props.isComplete}
                        titaAnswer={this.props.titaAnswer}
            />
        )

    }

    correctANS() {


        return (
            <div>
                <h4>Correct Answer</h4>
                <div className="alert alert-primary">{this.props.titaAnswer}</div>
            </div>
        )
    }


    yourANS() {


        let bg = null;


        if (this.props.tita_choice === this.props.titaAnswer) {
            bg = "alert-success";

        }
        else if (this.props.tita_choice === null) {
            bg = "alert-secondary";
        }
        else {
            bg = "alert-danger"
        }

        return (
            <div>
                <h4>Your Answer</h4>
                <div className={`alert ${bg}`}>{this.props.tita_choice}</div>
            </div>
        );

    }


    render() {

        return (
            <div>
                <div className="max-w-100-md scroll-x-auto">
                    <div className="" dangerouslySetInnerHTML={{__html: this.props.questionHtml}}/>
                </div>
                <div className="col-lg-4 col-xl-3 col-md-4 offset-md-0 col-sm-4 offset-sm-4 col-6 offset-3">

                    {!this.props.isComplete && this.titaKeyPad()}
                    {!!this.props.isComplete && <div>{this.correctANS()} {this.yourANS()}</div>}


                </div>
            </div>
        )
    }
}

export {TITAUI}