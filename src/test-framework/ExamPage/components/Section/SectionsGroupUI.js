import React from 'react';
import {SectionButton} from "./SectionButton/SectionButtonContainer";

function SectionsGroupUI(props) {


    return (
        <div className="container-fluid my-2">
            <div className="row justify-content-center ">
                {
                    props.sections.map((section) => {

                            let disabled = true;
                            if (section.is_complete || props.currentSection === section.id.toString()) {
                                disabled = true;
                            }

                            if (!props.allowJumps) {
                                disabled = true;
                            }
                            else {
                                disabled = props.currentSection === section.id.toString();
                            }


                            return (
                                <SectionButton key={section.id}
                                               sectionName={section.name}
                                               sectionID={section.id}
                                               isCompleted={section.is_complete}
                                               disabled={disabled}
                                />

                            );
                        }
                    )
                }
            </div>
        </div>
    )
}

export {SectionsGroupUI}