import React from 'react';
import './test.scss';
import useScrollSnap from 'react-use-scroll-snap';

function Test() {
    const scrollRef = useRef(null);
    useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });
    return (
        <div className='wrap' ref={scrollRef}>
            <div>First Page</div>
            <div>Second Page</div>
            <div>Third Page</div>   
            <div>Fourth Page</div>
        </div>
    )
}

export default Test