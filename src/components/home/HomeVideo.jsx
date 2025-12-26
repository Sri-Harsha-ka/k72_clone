import React from 'react'

const HomeVideo = ({rad}) => {
    return (
        <div style={{borderRadius:rad}} className='overflow-hidden'>
            <video autoPlay loop muted src="/k72.mp4"></video>
        </div>
    )
}

export default HomeVideo
