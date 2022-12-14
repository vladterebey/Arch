import React, { Component } from 'react'

import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react'

import { useTranslation } from "react-i18next";


const timelines = [
    [
        [
            "1-1st-timeline-date",
            "1-1st-timeline-title",
            "1-1st-timeline-text",
        ],
        [
            "1-2st-timeline-date",
            "1-2st-timeline-title",
            "1-2st-timeline-text",
        ], [
            "1-3st-timeline-date",
            "1-3st-timeline-title",
            "1-3st-timeline-text",
        ], [
            "1-4st-timeline-date",
            "1-4st-timeline-title",
            "1-4st-timeline-text",
        ],
    ],

    [
        [
            "2-1st-timeline-date",
            "2-1st-timeline-title",
            "2-1st-timeline-text",
        ],
        [
            "2-2st-timeline-date",
            "2-2st-timeline-title",
            "2-2st-timeline-text",
        ], [
            "2-3st-timeline-date",
            "2-3st-timeline-title",
            "2-3st-timeline-text",
        ],
        [
            "2-4st-timeline-date",
            "2-4st-timeline-title",
            "2-4st-timeline-text",
        ],
    ],

    [
        [
            "3-1st-timeline-date",
            "3-1st-timeline-title",
            "3-1st-timeline-text",
        ],
        [
            "3-2st-timeline-date",
            "3-2st-timeline-title",
            "3-2st-timeline-text",
        ], [
            "3-3st-timeline-date",
            "3-3st-timeline-title",
            "3-3st-timeline-text",
        ],
        [
            "3-4st-timeline-date",
            "3-4st-timeline-title",
            "3-4st-timeline-text",
        ],
    ],
    
    [
        [
            "4-1st-timeline-date",
            "4-1st-timeline-title",
            "4-1st-timeline-text",
        ],
        [
            "4-2st-timeline-date",
            "4-2st-timeline-title",
            "4-2st-timeline-text",
        ], [
            "4-3st-timeline-date",
            "4-3st-timeline-title",
            "4-3st-timeline-text",
        ],
        [
            "4-4st-timeline-date",
            "4-4st-timeline-title",
            "4-4st-timeline-text",
        ],
    ],

    [
        [
            "5-1st-timeline-date",
            "5-1st-timeline-title",
            "5-1st-timeline-text",
        ],
        [
            "5-2st-timeline-date",
            "5-2st-timeline-title",
            "5-2st-timeline-text",
        ], [
            "5-3st-timeline-date",
            "5-3st-timeline-title",
            "5-3st-timeline-text",
        ],
        [
            "5-4st-timeline-date",
            "5-4st-timeline-title",
            "5-4st-timeline-text",
        ],
    ],

]

export default function ArcTimeline(props) {
    const { t, i18n } = useTranslation();
    return (

        <Timeline lineColor={'#ddd'}>
            <TimelineItem
                key="001"
                dateText={t(timelines[props.timelineProp][0][0])}
                style={{ color: '#e86971' }}
                dateInnerStyle={{ background: '#ffd152', color: '#000' }}
            >
                <h3 className='mb-3'>{t(timelines[props.timelineProp][0][1])}</h3>
                <p>{t(timelines[props.timelineProp][0][2])}</p>
            </TimelineItem>
            <TimelineItem
                key="002"
                dateText={t(timelines[props.timelineProp][1][0])}
                dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
                bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                }}
            >
                <h3 className='mb-3' style={{ color: '#61b8ff' }}>{t(timelines[props.timelineProp][1][1])}</h3>
                <p>{t(timelines[props.timelineProp][1][2])}</p>
            </TimelineItem>
            <TimelineItem
                key="003"
                dateText={t(timelines[props.timelineProp][2][0])}
                dateInnerStyle={{ background: '#76bb7f' }}
            >
                <h3 className='mb-3'>{t(timelines[props.timelineProp][2][1])}</h3>
                <p>{t(timelines[props.timelineProp][2][2])}</p>
            </TimelineItem>
            <TimelineItem
                className='mb-3'
                key="004"
                dateText={t(timelines[props.timelineProp][3][0])}
                dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
            >
                <h3 className='mb-3'>{t(timelines[props.timelineProp][3][1])}</h3>
                <p>{t(timelines[props.timelineProp][3][2])}</p>
            </TimelineItem>
        </Timeline>

    )
}
