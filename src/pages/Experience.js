import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { School, Work } from '@mui/icons-material'
import '../styles/Experience.css'

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline className="vertical-timeline" lineColor="#9ea7c4">
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2003 - 2007' 
        iconStyle={{background: "#c07f24", color: "#fff"}}
        icon={<School />}
        >
          <h3 classname='vertical-timeline-element-title'>East Central University, Ada, OK</h3>
          <h4 classname='vertical-timeline-element-subtitle'>Mass Communications</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2022 - 2023' 
        iconStyle={{background: "#c07f24", color: "#fff"}}
        icon={<School />}
        >
          <h3 classname='vertical-timeline-element-title'>Bethel School of Technology, Redding, CA</h3>
          <h4 classname='vertical-timeline-element-subtitle'>Full Stack Web Development</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--work' date='2023' 
        iconStyle={{background: "#039be5", color: "#fff"}}
        icon={<Work />}
        >
          <h3 classname='vertical-timeline-element-title'>Digital Dream Team, Redding, CA</h3>
          <h4 classname='vertical-timeline-element-subtitle'>Back End Developer</h4>
          <p>Spearheaded the back end infrastructure and development for a six week project utilizing the OpenAI API.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience