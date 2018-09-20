import React, {Component} from 'react';

function SectionsGroupUI(props) {

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                {
                    props.sections.map((section) => {
                            return (
                                <SectionButton key={section.id} sectionName={section.name} sectionID={section.id} sectionFunc={props.sectionFunc}
                                               disabled={ !!(section.is_complete || (props.currentSection === section.id.toString()))}
                                />

                            )
                        }
                    )
                }
            </div>
        </div>
    )
}

function SectionButton(props) {
    const disabled = props.disabled ? "disabled btn-secondary" : "btn-outline-secondary";
    return (

        <button id={`section-button-${props.sectionID}`}
                disabled={props.disabled}
                className={` offset-md-2 col-md-8 col-lg-3 btn py-3 rounded-0 rounded mx-1 my-2  ${disabled}`}
                onClick={()=>props.sectionFunc(props.sectionID)}>
            {props.sectionName}
        </button>
    );
}

export {SectionButton, SectionsGroupUI}