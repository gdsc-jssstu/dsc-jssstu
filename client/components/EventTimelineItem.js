import React, { useEffect } from 'react';

const EventTimelineItem = ({ event }) => {
    return (
        <>
            <div className='etmln_timeline_item'>
                <div className='etmln_timeline_item_content'>
                    <div className='etmln_txt_info'>
                        <span className='etmln_event_name'>{event.name}</span>
                        <span className='etmln_event_date'>{event.date}</span>
                        <span className='etmln_event_discription'>{event.discription}</span>
                        <span className='etmln_timeline_dot'></span>
                    </div>
                    <div className="etmln_img_slider"></div>
                </div>
            </div>
        </>
    )
}

export default EventTimelineItem;