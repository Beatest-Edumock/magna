import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import {faBookOpen, faCheck} from '@fortawesome/free-solid-svg-icons'
import {faConnectdevelop, faAmazon} from '@fortawesome/free-brands-svg-icons';
import {Container} from 'reactstrap'

export const MOCK_TESTS_CARD_ELEMENTS = [

	{
		icon: <FontAwesomeIcon size={"6x"} icon={faBookOpen} color="black"/>,
		text: <div><h4 style={{fontFamily: 'Open Sans,Helvetica,Arial,sans-serif'}}>Mock Exam</h4>
		<div style={{fontFamily: 'Open Sans,Helvetica,Arial,sans-serif',color:'#666',fontSize: 14}}>
			<span style={{display:'block',textAlign:'left'}}><FontAwesomeIcon size={"1x"} icon={faCheck} color="#8C9EFF" style={{marginRight: 12}}/>
				20 comprehensive mocks designed by expert faculties which 
  				are set according to the latest pattern and test syllabus.
  			</span>
  			<span style={{display:'block',textAlign:'left'}}><FontAwesomeIcon size={"1x"} icon={faCheck} color="#8C9EFF" style={{marginRight: 12}}/>
				Mocks designed covering all the topics and sections of the IBPS 
                exam. 
  			</span>
  			<span style={{display:'block',textAlign:'left'}}><FontAwesomeIcon size={"1x"} icon={faCheck} color="#8C9EFF" style={{marginRight: 12}}/>
				Up-to-date question content reflects the reality of what 
                you’ll see on test day 
  			</span>
  			<span style={{display:'block',textAlign:'left'}}><FontAwesomeIcon size={"1x"} icon={faCheck} color="#8C9EFF" style={{marginRight: 12}}/>
				TAKE THE 1st MOCK FOR FREE 
  			</span>
		</div>
		</div>

	},

	{

		icon: <FontAwesomeIcon size={"6x"} icon={faBookOpen} color="black"/>,
		text: <div><h4 style={{fontFamily: 'Open Sans,Helvetica,Arial,sans-serif'}}>Analysis</h4>
		<div style={{fontFamily: 'Open Sans,Helvetica,Arial,sans-serif',color:'#666',fontSize: 14}}>
			<span style={{display:'block',textAlign:'left'}}><FontAwesomeIcon size={"1x"} icon={faCheck} color="#8C9EFF" style={{marginRight: 12}}/>
				Analyze your strengths and weakness with your personalized 
                analysis 
  			</span>
  			<span style={{display:'block',textAlign:'left'}}><FontAwesomeIcon size={"1x"} icon={faCheck} color="#8C9EFF" style={{marginRight: 12}}/>
				Get a detailed solution to each and every question. 
  			</span>
  			<span style={{display:'block',textAlign:'left'}}><FontAwesomeIcon size={"1x"} icon={faCheck} color="#8C9EFF" style={{marginRight: 12}}/>
  				Join thousands of others in taking the mocks today and be a part of the race. 
  			</span>
  			<span style={{display:'block',textAlign:'left'}}><FontAwesomeIcon size={"1x"} icon={faCheck} color="#8C9EFF" style={{marginRight: 12}}/>
				Join thousands of others in taking the mocks today 
                and be a part of the race. 
  			</span>
		</div>
		</div>
	},


]


export const TOPIC_TESTS_CARD_ELEMENTS = [

	{
		icon: <FontAwesomeIcon size={"6x"} icon={faBookOpen} color="black"/>,
		text: <div><h4 style={{fontFamily: 'Open Sans,Helvetica,Arial,sans-serif'}}>Topic Exam</h4>
		<div style={{fontFamily: 'Open Sans,Helvetica,Arial,sans-serif',color:'#666',fontSize: 14}}>
			<span style={{display:'block',textAlign:'left'}}><FontAwesomeIcon size={"1x"} icon={faCheck} color="#8C9EFF" style={{marginRight: 12}}/>
				Questions from each topic based on the latest syllabus
  			</span>
  			<span style={{display:'block',textAlign:'left'}}><FontAwesomeIcon size={"1x"} icon={faCheck} color="#8C9EFF" style={{marginRight: 12}}/>
				Short tests to test your skill set in each topic 
  			</span>
		</div>
		</div>

	},

	{

		icon: <FontAwesomeIcon size={"6x"} icon={faBookOpen} color="black"/>,
		text: <div><h4 style={{fontFamily: 'Open Sans,Helvetica,Arial,sans-serif'}}>Analysis</h4>
		<div style={{fontFamily: 'Open Sans,Helvetica,Arial,sans-serif',color:'#666',fontSize: 14}}>
			<span style={{display:'block',textAlign:'left'}}><FontAwesomeIcon size={"1x"} icon={faCheck} color="#8C9EFF" style={{marginRight: 12}}/>
				Time yourself on each topic to excel your skills 
  			</span>
  			<span style={{display:'block',textAlign:'left'}}><FontAwesomeIcon size={"1x"} icon={faCheck} color="#8C9EFF" style={{marginRight: 12}}/>
				Review detailed answer explanations so you can study smarter 
  			</span>
  		</div>
		</div>
	},


]