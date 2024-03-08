import React from 'react'
import myPic from '../../assets/pictures/Ishpreet Singh.jpg';

const DashboardTop = () => {
    return (
        <div className='dashboard-top'>
            <div className='dashboard-top-left'>
                <div className='my-pic-main'>
                    <img className='my-pic' src={myPic} alt='' />
                </div>
            </div>
            <div className='dashboard-top-right'>
                <div className='content-1'>
                    <h1 className='dashboard-top-right-h1'>Ishpreet Singh</h1>
                </div>
                <div className='content-2'>
                    <h2 className='dashboard-top-right-h2'>Web Developer</h2>
                </div>
            </div>
        </div>
    )
}

export default DashboardTop
