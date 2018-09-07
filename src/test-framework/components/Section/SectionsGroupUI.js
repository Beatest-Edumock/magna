import React, {Component} from 'react';

function SectionsGroupUI(props) {

    return (
        <div className="container-fluid col-lg-8">
            <div className="row justify-content-center">
            {
                props.sections.map((section) =>
                        <SectionButton sectionName ={section.name} sectionID={section.id} sectionFunc={props.sectionFunc}
                        disabled = {section.is_complete? true: false}
                        />
                    )
            }
            </div>
        </div>
    )
}

function SectionButton(props) {
    const disabled = props.disabled? "disabled" : "";
    return (
        <button type='button' className={ `col-md-12 col-lg-3 btn btn-primary mx-auto my-2 ${disabled}`}
                onClick={()=>{props.sectionFunc(props.sectionID)}}>
            {props.sectionName}
        </button>
    );
}

export{SectionButton, SectionsGroupUI}