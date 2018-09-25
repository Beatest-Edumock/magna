import React from 'react';
import {SectionButton} from "./SectionButton/SectionButtonContainer";

function SectionsGroupUI(props) {

    return (
        <div className="container-fluid my-2">
            <div className="row justify-content-center ">
                {
                    props.sections.map((section) => {
                            return (
                                <SectionButton key={section.id}
                                               sectionName={section.name}
                                               sectionID={section.id}
                                               isCompleted={section.is_complete}
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

export {SectionsGroupUI}