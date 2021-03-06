import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import {faBinoculars, faCogs, faHeadphones, faUsers, faUserTie, faWindowMaximize} from '@fortawesome/free-solid-svg-icons'
import {faAddressBook} from '@fortawesome/free-regular-svg-icons'
import {Container} from 'reactstrap'
import {PLACEMENTS_PAGE_ROUTE} from "../route";

const pStyle = {
    height: '80px',
    textAlign: 'center'
};
export const FEATURE_CARD_ELEMENTS = [


	{

		icon: <img style={pStyle} src={require('./icons/exam.svg')} />,
		text: <p style={{fontSize:'14px',fontFamily: 'Open Sans,Helvetica,Arial,sans-serif',fontWeight: 600}}>Skill Specific assessment to measure your potential</p>
	},

	{
        icon: <img style={pStyle} src={require('./icons/recommendation.svg')} />,
		text: <p style={{fontSize:'14px',fontFamily: 'Open Sans,Helvetica,Arial,sans-serif',fontWeight: 600}}>AI enabled Recommendation Engine to find your best fitting job</p>

	},
	{
        icon: <img style={pStyle} src={require('./icons/intra_college_percentile.svg')} />,
		text: <p style={{fontSize:'14px',fontFamily: 'Open Sans,Helvetica,Arial,sans-serif',fontWeight: 600}}>Intra college percentile to gauge your position amongst peers</p>

	},
	{
        icon: <img style={pStyle} src={require('./icons/analysis.svg')} />,
		text: <p style={{fontSize:'14px',fontFamily: 'Open Sans,Helvetica,Arial,sans-serif',fontWeight: 600}}>Exam specific analysis to improve your score and the chances of getting hired</p>

	}



]


export const LARGE_FEATURE_CARD_ELEMENTS = [

	{
		icon: <FontAwesomeIcon size={"6x"} icon={faCogs} color="#8C9EFF"/>,
		text: <div><h4>Technology</h4>
		<div style={{fontFamily: 'Open Sans,Helvetica,Arial,sans-serif',color:'#666'}}>Gear up your skills on industry relevant courses and a must solve capstone that would add the much needed X-factor to your resume.</div></div>

	},

	{

		icon: <FontAwesomeIcon size={"6x"} icon={faHeadphones} color="#8C9EFF"/>,
		text: <div><h4>Aptitude</h4>
			<div style={{fontFamily: 'Open Sans,Helvetica,Arial,sans-serif',color:'#666'}}>Aiming to ace CAT or your campus recruitment exams? Need to learn the tricks to solve a sum in seconds? Learn from IIM and XLRI graduates today.</div></div>
	},

	{

		icon: <FontAwesomeIcon size={"6x"} icon={faUserTie} color="#8C9EFF"/>,
		text: <div><h4>Business Skills</h4>
		<div style={{fontFamily: 'Open Sans,Helvetica,Arial,sans-serif',color:'#666'}}>Wisen up with the concepts and skills to make it through to the best industries today.</div></div>
	},



]


export const FLIP_CARD_ELEMENTS = [

	// {
	// 	front:<div className="container" style={{padding: "10%"}}>
	//
    //             <div className="text-center " style={{}}>
	//
    //                 <Container>
    //                     <FontAwesomeIcon size={"6x"} icon={faCogs} color="#8C9EFF"/>
    //                 </Container>
	//
    //             </div>
	//
    //             <hr/>
	//
    //             <div className="text-center" style={{marginTop: "10%"}}>
    //                 <Container>
    //                         <div><h4>Technology</h4>
	// 	<div style={{fontFamily: 'Open Sans,Helvetica,Arial,sans-serif',color:'#666'}}>Gear up your skills on industry relevant courses and a must solve capstone that would add the much needed X-factor to your resume.</div></div>
    //                 </Container>
	//
    //             </div>
    //         </div>
	//
	// },

	{
		front:<div className="container" style={{padding: "10%"}}>

                <div className="text-center " style={{}}>

                    <Container>
						<img style={{width:"30%"}} src={require("./icons/placement-2.svg")}/>
                    </Container>

                </div>

                <hr/>

                <div className="text-center" style={{marginTop: "10%"}}>
                    <Container>
                             <div><h4>Placement Exam</h4>
			<div style={{fontFamily: 'Open Sans,Helvetica,Arial,sans-serif',color:'#666'}}>Aiming to ace CAT or your campus recruitment exams? Need to learn the tricks to solve a sum in seconds? Learn from IIM and XLRI graduates today.</div></div>
                </Container>
            </div>
            </div>,
		back:
			<div className="text-center py-2" style={{display: 'table-cell', verticalAlign: 'middle'}}>
				<a className="btn btn-light" href={PLACEMENTS_PAGE_ROUTE()}>
				Go to tests
				</a>
            </div>
    },
	// {
	//
	// 	front:<div className="container" style={{padding: "10%"}}>
	//
    //             <div className="text-center " style={{}}>
	//
    //                 <Container>
    //                     <FontAwesomeIcon size={"6x"} icon={faUserTie} color="#8C9EFF"/>
    //                 </Container>
	//
    //             </div>
	//
    //             <hr/>
	//
    //             <div className="text-center" style={{marginTop: "10%"}}>
    //                 <Container>
    //                         <div><h4>Business Skills</h4>
	// 	<div style={{fontFamily: 'Open Sans,Helvetica,Arial,sans-serif',color:'#666'}}>Wisen up with the concepts and skills to make it through to the best industries today.</div></div>
    //                 </Container>
	//
    //             </div>
    //         </div>
    // },



]

export const COLLEGE_IMAGES = [

	{
		img: "/colleges/college1.png"

	},
	{
		img: "/colleges/college2.png"

	},
	{
		img: "/colleges/college3.png"
	},
	{
		img: "/colleges/college4.png"

	},
	{
		img: "/colleges/college5.png"

	},
	{
		img: "/colleges/college6.png"

	},
	{
		img: "/colleges/college7.png"

	},
	{
		img: "/colleges/college8.png"

	},
	{
		img: "/colleges/college9.png"

	}

]


export const TESTIMONIALS = [

	{
		img: "/testimonials/anulekha_chatterjee.png",
		message: "Beatest proved to be an useful tool for my campus placement preparation. Along with quality questions and solutions, the UI was also friendly.",
		name: "Anulekha Chatterjee",
		place:"Meghnad Saha Institute of Technology, Dept of IT – Placed at Bentley Systems"

	},
	{
		img: "/testimonials/arijit_bhatta.png",
		message: "The quality of the content was perfect for placement preparation and it had undoubtedly been a great help to crack the exams.",
		name: "Arijit Bhattacharya",
		place: "Jadavpur University, Dept of Chemical Engineering – Placed at Reliance Industries"
	},
	{
		img: "/testimonials/avatar_girl.png",
		message: "The exams on TCS paper boosted my preparations for the company and helped me in getting placed. The overall experience was really good.",
		name: "Sharmistha Bakshi",
		place: "Meghnad Saha Institute of Technology, Dept of CSE, - Placed in TCS"

	},
	{
		img: "/testimonials/avatar_girl.png",
		message: "Content was excellent and really helped me beyond placement exams. Although, would have loved to view a few more questions that were meant for mediocre students. Overall it was extremely useful.",
		name: "Piyali Biswas",
		place: "Jadavpur University – Dept of Food technology"


	},
	{
		img: "/testimonials/salil_abbas.png",
		message: "Despite the Verbal questions being a tad bit difficult, I certainly feel that the content was really helpful and would definitely be rated as 8/10 ",
		name: "Salil Abbas",
		place: "IIT Kanpur, Dept of Civil Engineering – Placed at American Express"

	},
	{
		img: "/testimonials/shubham_yadav.png",
		message: "The overall experience was quite good. The content was satisfactory and the UI was friendly.",
		name: "Shubham Yadav",
		place: "IIT Kanpur , Dept of Electrical Engineering,  – Placed at Intel"

	},
	{
		img: "/testimonials/tarun_saraswat.png",
		message: "The content kept me thoroughly engaged as it was so well drafted. It was really beneficial to be a part of this. Questions are especially helpful and appropriate.",
		name: "Tarun Saraswat",
		place: "IITBHU, Dept of Chemistry  - Placed at EXL Services"

	}

]



export const RECOGNITIONS = [

	{
		img: "/media/1000startups.png"

	},
	{
		img: "/media/digital_india.png"

	},
	{
		img: "/media/inc42.png"
	},
	{
		img: "/media/scoopearth.png"

	},
	{
		img: "/media/startup_india.png"

	},
	{
		img: "/media/your_story.png"

	}


]