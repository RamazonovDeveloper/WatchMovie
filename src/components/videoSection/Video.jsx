import React from 'react';

const Video = ({src, ...props}) => {
    return (
        <div className='video'>
            <video src={src} {...props}></video>
        </div>
    );
}

export default Video;
