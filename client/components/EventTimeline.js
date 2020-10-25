import React from 'react';
import EventTimelineItem from './EventTimelineItem';
import eventData from '../data/eventData';

const EventTimeline = () => {
    return (
        <>
            <div className='etmln_container'>

                {eventData.map((event, idx) => {
                    return (<EventTimelineItem event={event} key={idx} />);
                })}
            </div>
        </>
    );
}

export default EventTimeline;